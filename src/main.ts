import './styles/main.css';
import { config } from './data/config';
import { renderApp } from './components/App';

// Analytics helper - pushes to dataLayer (GTM) + Clarity tag
function trackEvent(eventName: string, params: Record<string, string> = {}) {
  // GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  // Clarity custom tag
  if (typeof window.clarity === 'function') {
    window.clarity('set', eventName, params.label || params.service || 'true');
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderApp(config);
  }

  // Show sidebar only after scrolling past hero
  const sidebar = document.getElementById('sidebar');
  const hero = document.querySelector('.hero-section');

  if (sidebar && hero) {
    const handleScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom <= 100) {
        sidebar.classList.remove('opacity-0', 'pointer-events-none');
        sidebar.classList.add('opacity-100');
      } else {
        sidebar.classList.add('opacity-0', 'pointer-events-none');
        sidebar.classList.remove('opacity-100');
      }
    };

    // Initial state - hidden
    sidebar.classList.add('opacity-0', 'pointer-events-none', 'transition-opacity', 'duration-300');

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }

  // Service accordions
  const accordionButtons = document.querySelectorAll('[data-accordion]');
  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-accordion');
      const panel = document.getElementById(`panel-${index}`);
      const wrapper = btn.closest('.service-accordion');
      const isOpen = wrapper?.classList.contains('open');

      // Close all
      document.querySelectorAll('.service-accordion').forEach((el) => el.classList.remove('open'));
      document.querySelectorAll('.accordion-panel').forEach((el) => el.classList.remove('open'));
      document.querySelectorAll('[data-accordion]').forEach((el) => el.setAttribute('aria-expanded', 'false'));

      // Toggle current
      if (!isOpen && panel && wrapper) {
        wrapper.classList.add('open');
        panel.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');

        // Track which service was opened
        const title = wrapper.querySelector('h3')?.textContent?.trim() || '';
        trackEvent('service_view', { service: title });
      }
    });
  });

  // Scroll-reveal: animate sections as they enter the viewport
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // WhatsApp CTA button - track click as lead conversion
  const whatsappCta = document.getElementById('whatsapp-cta');
  if (whatsappCta) {
    whatsappCta.addEventListener('click', () => {
      trackEvent('generate_lead', { label: 'whatsapp_cta', method: 'whatsapp' });
    });
  }

  // QR Code Modal
  const qrButton = document.getElementById('qr-button');
  const qrModal = document.getElementById('qr-modal');
  const qrModalClose = document.getElementById('qr-modal-close');
  const qrModalBackdrop = document.getElementById('qr-modal-backdrop');
  const qrCodeImg = document.getElementById('qr-code-img') as HTMLImageElement;

  if (qrButton && qrModal && qrCodeImg) {
    // Generate vCard string
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${config.profile.name}`,
      `N:;${config.profile.name};;;`,
      `ORG:מיכאל - ספורטתרפיה`,
      `TITLE:${config.profile.title}`,
      `TEL;TYPE=CELL:${config.contact.phone.replace(/-/g, '')}`,
      `EMAIL:${config.contact.email}`,
      'END:VCARD'
    ].join('\n');

    // Generate QR code URL using QR Server API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(vCard)}&format=svg`;
    qrCodeImg.src = qrUrl;

    const openModal = () => {
      qrModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      qrModal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    qrButton.addEventListener('click', openModal);
    qrModalClose?.addEventListener('click', closeModal);
    qrModalBackdrop?.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !qrModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // Analytics - enable immediately (Clarity loads in head, GA via GTM)
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
  }

  // Track CTA button clicks (hero + contact section)
  document.querySelectorAll('.cta-button-hero, a[href="#contact"]').forEach((el) => {
    el.addEventListener('click', () => {
      trackEvent('cta_click', { label: el.textContent?.trim() || 'cta' });
    });
  });

  // Track WhatsApp sidebar click
  document.querySelector('a[href*="wa.me"]')?.addEventListener('click', () => {
    trackEvent('whatsapp_click', { label: 'sidebar' });
  });

  // Track phone call clicks
  document.querySelector('a[href^="tel:"]')?.addEventListener('click', () => {
    trackEvent('phone_click', { label: 'call' });
  });

  // Track scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        trackEvent('scroll_to_contact', { label: 'contact_section' });
        contactObserver.disconnect();
      }
    }, { threshold: 0.3 });
    contactObserver.observe(contactSection);
  }

  // Intake form - build a WhatsApp message from the entered details
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('cf-name') as HTMLInputElement).value.trim();
      const phone = (document.getElementById('cf-phone') as HTMLInputElement).value.trim();
      const message = (document.getElementById('cf-message') as HTMLTextAreaElement).value.trim();

      const lines = [
        `היי מיכאל, השארתי פרטים באתר לתיאום טיפול.`,
        `שם: ${name}`,
        `טלפון: ${phone}`,
      ];
      if (message) lines.push(`הודעה: ${message}`);

      const text = encodeURIComponent(lines.join('\n'));
      trackEvent('generate_lead', { label: 'contact_form', method: 'whatsapp' });
      window.open(`https://wa.me/${config.contact.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  }
});
