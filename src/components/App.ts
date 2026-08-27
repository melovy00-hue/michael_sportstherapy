import { Config } from '../data/config';

export function renderApp(config: Config): string {
  const whatsappDefaultText = encodeURIComponent('היי מיכאל, הגעתי מהאתר ואשמח לתאם טיפול. מתי נוח לדבר?');

  return `
    <!-- Skip to Content - Accessibility -->
    <a href="#about" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[200] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
      דלג לתוכן הראשי
    </a>

    <!-- Fixed Side Contact Buttons - All Screens (Right side for RTL) -->
    <nav id="sidebar" aria-label="תפריט ניווט צדדי" class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-lg rounded-l-lg overflow-hidden">
      <a
        href="#contact"
        class="side-button bg-slate-800 text-white"
        title="יצירת קשר"
        aria-label="מעבר ליצירת קשר"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a
        href="https://wa.me/${config.contact.whatsapp}?text=${whatsappDefaultText}"
        class="side-button bg-green-500 text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="שלח הודעת WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a
        href="${config.socialLinks.find(s => s.platform === 'instagram')?.url || '#'}"
        class="side-button side-button-instagram text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        aria-label="עקבו באינסטגרם"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <button
        id="qr-button"
        class="side-button bg-accent-500 text-white"
        title="כרטיס ביקור דיגיטלי"
        aria-label="הצג QR לכרטיס ביקור"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/></svg>
      </button>
    </nav>

    <!-- QR Code Modal -->
    <div id="qr-modal" class="qr-modal hidden" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
      <div class="qr-modal-backdrop" id="qr-modal-backdrop"></div>
      <div class="qr-modal-content">
        <button id="qr-modal-close" class="qr-modal-close" aria-label="סגור">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="text-center">
          <h3 id="qr-modal-title" class="text-xl font-bold text-slate-800 mb-2">${config.profile.name}</h3>
          <p class="text-slate-500 text-sm mb-4">${config.profile.title}</p>
          <div class="qr-code-wrapper">
            <img
              id="qr-code-img"
              src=""
              alt="QR Code - כרטיס ביקור"
              class="w-48 h-48 mx-auto"
            />
          </div>
          <p class="text-slate-600 text-sm mt-4">סרקו כדי להוסיף לאנשי קשר</p>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section relative min-h-[100svh] flex flex-col overflow-hidden">
      <!-- Background: real photo when present at /hero.jpg, gradient fallback otherwise -->
      <div class="absolute inset-0 hero-bg"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent md:bg-gradient-to-l md:from-slate-900/75 md:via-slate-900/35 md:to-transparent"></div>

      <!-- Content -->
      <div class="relative z-20 flex-1 flex items-end md:items-center justify-center w-full px-4 sm:px-6 md:px-8 pb-6 pt-24 md:py-20">
        <div class="text-center w-full max-w-4xl p-5 sm:p-8 md:p-12">
          <div class="animate-fade-in-up">
            <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-3 md:mb-6 leading-none tracking-tight" style="text-shadow: 0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)">
              ${config.profile.name}
            </h1>
            <p class="text-xl sm:text-2xl md:text-3xl text-primary-300 font-semibold mb-3 md:mb-4" style="text-shadow: 0 1px 10px rgba(0,0,0,0.4)">
              ${config.profile.title}
            </p>
            <p class="text-lg sm:text-xl md:text-2xl text-slate-200 mb-6 md:mb-12 leading-relaxed max-w-2xl mx-auto" style="text-shadow: 0 1px 8px rgba(0,0,0,0.4)">
              ${config.profile.bio}
            </p>
          </div>

          <div class="animate-fade-in-up animation-delay-200">
            <a href="#contact" class="cta-button-hero text-lg px-10 py-4">
              לתיאום טיפול
            </a>
            <p class="text-white/60 text-sm mt-3" style="text-shadow: 0 1px 4px rgba(0,0,0,0.3)">
              מענה מהיר בוואטסאפ
            </p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50/50 reveal">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            איך אני יכול לעזור
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            הבעיות שאני הכי הרבה מטפל בהן
          </h2>
          <p class="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            אבחון מדויק וטיפול מותאם אישית — בקליניקה באשקלון או עד הבית שלכם
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:gap-4 max-w-2xl mx-auto">
          ${config.links.map((link, index) => `
            <div class="service-accordion"${link.anchor ? ` id="${link.anchor}"` : ''}>
              <button
                class="service-card group"
                data-accordion="${index}"
                aria-expanded="false"
              >
                <div class="service-icon">
                  ${getServiceIcon(link.icon || 'activity')}
                </div>
                <div class="service-content">
                  <h3 class="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">${link.title}</h3>
                </div>
                <div class="service-arrow mr-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-chevron transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              <div class="accordion-panel" id="panel-${index}">
                <p class="text-sm text-slate-600 leading-relaxed">${link.description || ''}</p>
                ${link.localVideo ? `
                <div class="px-5 pb-5">
                  <video
                    class="accordion-video"
                    src="${link.localVideo}"
                    controls
                    preload="metadata"
                    playsinline
                  ></video>
                </div>
                ` : ''}
              </div>
            </div>
          `).join('')}

          <!-- Trust Indicators -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 mb-4">
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">1,000+</div>
              <div class="text-xs md:text-sm text-slate-500">מטופלים</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">5+</div>
              <div class="text-xs md:text-sm text-slate-500">שנות ניסיון בטיפולים</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-lg md:text-xl font-bold text-primary-600 mb-1">קליניקה + בית</div>
              <div class="text-xs md:text-sm text-slate-500">גמישות במיקום הטיפול</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-accent-500 mb-1">&#10084;</div>
              <div class="text-xs md:text-sm text-slate-500">ליווי אישי וזמין</div>
            </div>
          </div>

          <!-- CTA Button for Appointment -->
          <a
            href="#contact"
            class="mt-2 py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-2xl font-bold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            לתיאום טיפול
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50/50 reveal">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Profile Image: real photo when present at /profile.png, initial avatar fallback otherwise -->
          <div class="flex-shrink-0">
            <div class="profile-avatar w-52 h-52 md:w-64 md:h-64 rounded-3xl shadow-xl border-4 border-white"></div>
          </div>
          <!-- Text Content -->
          <div class="text-center md:text-right">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              קצת עליי
            </h2>
            <p class="text-primary-600 font-medium text-base md:text-lg mb-4">מיכאל, ספורטתרפיסט</p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              בוגר לימודי ספורטתרפיה ועיסוי רפואי (מכללת רידמן), עם תעודות בעיסוי אורתופדי, עיסוי ספורטאים, דיקור יבש ואורתופדי וקינזיולוגיה יישומית. 5 שנות ניסיון בדיקור יבש, וניסיון בעבודה בקופות חולים — לצד אלף מטופלים ומעלה שליוויתי עד היום.
            </p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              אני מטפל באנשים שמנהלים אורח חיים פעיל ומתאמנים — לא רק בספורטאים מקצועיים — ומאמין בשילוב בין אבחון מדויק, טיפול ידני, קינזיותייפינג ודיקור יבש בהתאם למה שהגוף שלכם באמת צריך.
            </p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              זמין גם בקליניקה באשקלון וגם בהגעה עד הבית באזור אשקלון (עד כ-30 דקות נסיעה) — בואו נדבר ונבין מה נכון לכם.
            </p>
            <a href="#contact" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              <span>בואו נדבר</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    ${config.galleryItems.length > 0 ? `
    <section id="gallery" class="py-14 md:py-24 bg-white reveal">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            מהקליניקה
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            גלריית טיפולים
          </h2>
          <p class="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            תמונות וסרטונים אמיתיים מתוך טיפולים בקליניקה ובבית הלקוח
          </p>
        </div>

        <div class="gallery-row-wrapper">
          <button id="gallery-scroll-prev" class="gallery-scroll-arrow gallery-scroll-arrow-right" aria-label="הקודם">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div id="gallery-row" class="gallery-row">
            ${config.galleryItems.map((item, i) => `
              <button
                class="gallery-item"
                data-gallery-index="${i}"
                data-type="${item.type}"
                data-src="${item.src}"
                aria-label="${item.alt}"
              >
                <img src="${item.type === 'video' ? item.poster : item.src}" alt="${item.alt}" loading="lazy" />
                ${item.type === 'video' ? `
                <span class="gallery-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </span>
                ` : ''}
              </button>
            `).join('')}
          </div>

          <button id="gallery-scroll-next" class="gallery-scroll-arrow gallery-scroll-arrow-left" aria-label="הבא">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Lightbox Modal -->
    <div id="gallery-modal" class="gallery-modal hidden" role="dialog" aria-modal="true">
      <div class="gallery-modal-backdrop" id="gallery-modal-backdrop"></div>
      <div class="gallery-modal-content">
        <button id="gallery-modal-close" class="gallery-modal-close" aria-label="סגור">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="flex items-center gap-3">
          <button id="gallery-prev" class="gallery-modal-nav" aria-label="הקודם">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div id="gallery-modal-media" class="gallery-modal-media"></div>
          <button id="gallery-next" class="gallery-modal-nav" aria-label="הבא">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
    ` : ''}

    <!-- Testimonials Section -->
    ${config.testimonials.length > 0 ? `
    <section id="testimonials" class="py-14 md:py-24 bg-slate-50/70 reveal">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            מה אומרים המטופלים
          </h2>
        </div>
        <div class="grid gap-6">
          ${config.testimonials.map((t) => `
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg bg-gradient-to-br from-primary-500 to-accent-500">
                  ${t.name.trim().charAt(0)}
                </div>
                <h4 class="font-semibold text-slate-800">${t.name}</h4>
              </div>
              <p class="text-slate-600 text-base leading-relaxed">${t.quote}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="py-14 md:py-24 bg-gradient-to-b from-slate-50/50 to-white reveal">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          בואו נדבר
        </h2>
        <p class="text-slate-500 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
          תשאירו פרטים או תכתבו בוואטסאפ, ואחזור אליכם בהקדם לתיאום טיפול או התייעצות קצרה
        </p>

        <!-- WhatsApp CTA Button -->
        <div class="max-w-md mx-auto mb-8">
          <a
            href="https://wa.me/${config.contact.whatsapp}?text=${whatsappDefaultText}"
            id="whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            class="group block w-full px-8 py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1"
          >
            <span class="flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              בואו נדבר בוואטסאפ
            </span>
          </a>
          <p class="text-slate-400 text-sm mt-3">מענה תוך זמן קצר</p>
        </div>

        <!-- Divider -->
        <div class="flex items-center gap-4 max-w-md mx-auto mb-8">
          <div class="flex-1 h-px bg-slate-200"></div>
          <span class="text-slate-400 text-sm">או</span>
          <div class="flex-1 h-px bg-slate-200"></div>
        </div>

        <!-- Intake Form: sends details to WhatsApp for a callback -->
        <form id="contact-form" class="max-w-md mx-auto text-right space-y-4">
          <div>
            <label for="cf-name" class="block text-sm font-medium text-slate-600 mb-1.5">שם</label>
            <input id="cf-name" name="name" type="text" required autocomplete="name"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
          </div>
          <div>
            <label for="cf-phone" class="block text-sm font-medium text-slate-600 mb-1.5">טלפון</label>
            <input id="cf-phone" name="phone" type="tel" required autocomplete="tel"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
          </div>
          <div>
            <label for="cf-message" class="block text-sm font-medium text-slate-600 mb-1.5">במה אפשר לעזור? (לא חובה)</label>
            <textarea id="cf-message" name="message" rows="3"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"></textarea>
          </div>
          <button type="submit"
            class="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            שליחה — אחזור אליכם
          </button>
          <p class="text-slate-400 text-xs">השליחה תפתח הודעת וואטסאפ עם הפרטים שמילאתם, ישירות אליי</p>
        </form>

        <!-- Social proof -->
        <p class="text-slate-400 text-sm mt-10">
          עוקבים אחרי תוכן על שיקום ואימון?
          <a
            href="${config.socialLinks.find(s => s.platform === 'instagram')?.url || '#'}"
            class="text-primary-500 hover:text-primary-400 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >@michael_sportstherapy</a>
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-8 md:py-10" role="contentinfo">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-white text-sm mb-1">
          ${config.profile.name} | ${config.profile.title}
        </p>
        <p class="text-white/50 text-xs">&copy; ${new Date().getFullYear()}</p>
      </div>
    </footer>
  `;
}

function getServiceIcon(icon: string): string {
  const icons: Record<string, string> = {
    bone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>',
    move: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  };
  return icons[icon] || icons.activity;
}
