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

  // Treatment Gallery row scrolling (edge arrows) - seamless infinite loop.
  // The row is rendered as 3 back-to-back copies of the items; we always scroll
  // forward/backward by one step, and once we drift into the outer copies we
  // silently (no animation) snap back to the equivalent spot in the middle
  // copy - invisible to the viewer since the copies are pixel-identical.
  const galleryRow = document.getElementById('gallery-row');
  const galleryScrollPrev = document.getElementById('gallery-scroll-prev');
  const galleryScrollNext = document.getElementById('gallery-scroll-next');
  if (galleryRow) {
    const rowItems = Array.from(galleryRow.querySelectorAll<HTMLElement>('.gallery-item'));
    const itemCount = Number(galleryRow.getAttribute('data-item-count')) || rowItems.length / 3;
    let domIndex = itemCount;

    // Position at the middle copy's start via scrollLeft directly (not
    // scrollIntoView) so page load never scrolls the viewport vertically.
    if (rowItems[0] && rowItems[itemCount]) {
      const firstRect = rowItems[0].getBoundingClientRect();
      const targetRect = rowItems[itemCount].getBoundingClientRect();
      galleryRow.scrollLeft = targetRect.left - firstRect.left;
    }

    const jumpTo = (index: number) => {
      domIndex = index;
      // CSS scroll-behavior:smooth on the row overrides scrollIntoView's own
      // behavior option in some browsers, so force instant explicitly here.
      galleryRow.style.scrollBehavior = 'auto';
      rowItems[domIndex]?.scrollIntoView({ behavior: 'auto', inline: 'start', block: 'nearest' });
      galleryRow.style.scrollBehavior = '';
    };
    const moveTo = (index: number) => {
      domIndex = index;
      rowItems[domIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      window.setTimeout(() => {
        if (domIndex >= itemCount * 2) jumpTo(domIndex - itemCount);
        else if (domIndex < itemCount) jumpTo(domIndex + itemCount);
      }, 450);
    };

    galleryScrollPrev?.addEventListener('click', () => moveTo(domIndex - 1));
    galleryScrollNext?.addEventListener('click', () => moveTo(domIndex + 1));
  }

  // Treatment Gallery lightbox - keyed by logical index (0..N-1), independent
  // of which of the 3 row copies was actually clicked.
  const galleryButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.gallery-item'));
  const galleryModal = document.getElementById('gallery-modal');
  const galleryModalMedia = document.getElementById('gallery-modal-media');
  const galleryModalClose = document.getElementById('gallery-modal-close');
  const galleryModalBackdrop = document.getElementById('gallery-modal-backdrop');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  let galleryIndex = 0;

  const galleryMediaByIndex = new Map<number, { type: string; src: string }>();
  galleryButtons.forEach((btn) => {
    const logicalIndex = Number(btn.getAttribute('data-logical-index'));
    if (!galleryMediaByIndex.has(logicalIndex)) {
      galleryMediaByIndex.set(logicalIndex, {
        type: btn.getAttribute('data-type') || 'image',
        src: btn.getAttribute('data-src') || '',
      });
    }
  });

  const renderGalleryMedia = (index: number) => {
    if (!galleryModalMedia) return;
    const media = galleryMediaByIndex.get(index);
    if (!media) return;
    galleryModalMedia.innerHTML =
      media.type === 'video'
        ? `<video src="${media.src}" controls autoplay playsinline></video>`
        : `<img src="${media.src}" alt="" />`;
  };

  const openGallery = (index: number) => {
    galleryIndex = index;
    renderGalleryMedia(galleryIndex);
    galleryModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    trackEvent('gallery_open', { label: String(index) });
  };

  const closeGallery = () => {
    galleryModal?.classList.add('hidden');
    if (galleryModalMedia) galleryModalMedia.innerHTML = '';
    document.body.style.overflow = '';
  };

  const galleryCount = galleryMediaByIndex.size;
  galleryButtons.forEach((btn) => {
    btn.addEventListener('click', () => openGallery(Number(btn.getAttribute('data-logical-index'))));
  });
  galleryPrev?.addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + galleryCount) % galleryCount;
    renderGalleryMedia(galleryIndex);
  });
  galleryNext?.addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % galleryCount;
    renderGalleryMedia(galleryIndex);
  });
  galleryModalClose?.addEventListener('click', closeGallery);
  galleryModalBackdrop?.addEventListener('click', closeGallery);
  document.addEventListener('keydown', (e) => {
    if (!galleryModal || galleryModal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') galleryPrev?.click();
    if (e.key === 'ArrowRight') galleryNext?.click();
  });

  // Testimonials carousel - centers the active card and scales its neighbors,
  // matching the gallery's arrow style. Position is computed by measuring the
  // live DOM (getBoundingClientRect), so it's correct regardless of RTL.
  const testimonialTrack = document.getElementById('testimonial-track');
  const testimonialScrollPrev = document.getElementById('testimonial-scroll-prev');
  const testimonialScrollNext = document.getElementById('testimonial-scroll-next');
  if (testimonialTrack) {
    const testimonialViewport = testimonialTrack.parentElement as HTMLElement;
    const testimonialCards = Array.from(testimonialTrack.querySelectorAll<HTMLElement>('.testimonial-card'));
    let testimonialActive = 0;
    let testimonialTranslate = 0;

    const centerTestimonial = (index: number, animate: boolean) => {
      testimonialCards.forEach((card, i) => card.classList.toggle('is-center', i === index));
      const viewportRect = testimonialViewport.getBoundingClientRect();
      const cardRect = testimonialCards[index].getBoundingClientRect();
      const delta = (viewportRect.left + viewportRect.width / 2) - (cardRect.left + cardRect.width / 2);
      if (!animate) testimonialTrack.style.transition = 'none';
      testimonialTranslate += delta;
      testimonialTrack.style.transform = `translateX(${testimonialTranslate}px)`;
      if (!animate) {
        void testimonialTrack.offsetHeight;
        testimonialTrack.style.transition = '';
      }
      testimonialActive = index;
    };

    if (testimonialCards.length > 1) {
      centerTestimonial(0, false);
      testimonialScrollPrev?.addEventListener('click', () => {
        centerTestimonial((testimonialActive - 1 + testimonialCards.length) % testimonialCards.length, true);
      });
      testimonialScrollNext?.addEventListener('click', () => {
        centerTestimonial((testimonialActive + 1) % testimonialCards.length, true);
      });
    } else {
      testimonialScrollPrev?.classList.add('hidden');
      testimonialScrollNext?.classList.add('hidden');
    }
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
