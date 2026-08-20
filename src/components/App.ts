import { Config } from '../data/config';

export function renderApp(config: Config): string {
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
        href="https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('היי, הגעתי מהאתר ואשמח לשמוע פרטים. מתי נוח לדבר?')}"
        class="side-button bg-green-500 text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="שלח הודעת WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a
        href="https://instagram.com/your_handle"
        class="side-button side-button-instagram text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        aria-label="עקבו באינסטגרם"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <a
        href="https://www.google.com/maps?q=32.0783077,34.7971899&z=18"
        class="side-button bg-blue-500 text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="מיקום המשרד"
        aria-label="נווט למשרד"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </a>
      <button
        id="qr-button"
        class="side-button bg-purple-600 text-white"
        title="כרטיס ביקור דיגיטלי"
        aria-label="הצג QR לכרטיס ביקור"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
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


    <!-- Hero Section with Background Image -->
    <section class="hero-section relative min-h-[100svh] flex flex-col overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <picture>
          <source srcset="/hero.jpg" />
          <img
            src="/hero.jpg"
            alt="תמונת רקע ראשית"
            class="w-full h-full object-cover object-[55%_center] md:object-center"
            loading="eager"
            width="1536"
            height="1024"
          />
        </picture>
        <!-- Gradient Overlay - Optimized for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent md:bg-gradient-to-l md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>
      </div>

      <!-- Top Header Bar with Logo -->
      <div class="relative z-30 w-full bg-gradient-to-b from-white/90 to-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-end md:justify-start">
          <img
            src="/logo/logo-cropped.svg"
            alt="${config.profile.name} - לוגו"
            class="h-20 sm:h-28 md:h-36 lg:h-40 w-auto"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-20 flex-1 flex items-end md:items-center justify-center w-full px-4 sm:px-6 md:px-8 pb-6 pt-0 md:py-20">
        <div class="text-center w-full max-w-4xl p-5 sm:p-8 md:p-12">
          <!-- Name and Title -->
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

          <!-- CTA Button -->
          <div class="animate-fade-in-up animation-delay-200">
            <a href="#contact" class="cta-button-hero text-lg px-10 py-4">
              לקביעת פגישה
            </a>
            <p class="text-white/60 text-sm mt-3" style="text-shadow: 0 1px 4px rgba(0,0,0,0.3)">
              ללא עלות | ללא התחייבות
            </p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>

    <!-- Promo Video Section -->
    <section class="promo-video-section relative overflow-hidden">
      <!-- Background blur decoration -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900"></div>
      <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <!-- Text Content - Desktop Right (RTL) -->
          <div class="flex-1 text-center md:text-right order-2 md:order-1">
            <span class="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-primary-300 text-sm font-medium rounded-full mb-5 border border-white/10">
              הכירו אותי
            </span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              ליווי פיננסי וביטוחי
              <span class="block text-primary-400">לאורך החיים</span>
            </h2>
            <p class="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 md:mr-0">
              שקיפות, עצמאות ואחריות מלאה. כי כשמדובר בכסף שלכם ובעתיד שלכם — מגיע לכם מישהי שבאמת אכפת לה.
            </p>
            <a
              href="#contact"
              class="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              לתיאום שיחה ראשונית
            </a>
          </div>

          <!-- Video Thumbnail - Desktop Left (RTL) -->
          <div class="order-1 md:order-2 flex-shrink-0">
            <div class="promo-video-vertical" id="promo-video-container" data-video-id="YOUTUBE_ID_PROMO">
              <img
                src="/video-thumb.jpg"
                alt="תדמית עצמית - ליווי פיננסי וביטוחי"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div class="promo-play-overlay" id="promo-play-overlay" role="button" tabindex="0" aria-label="צפייה בסרטון תדמית">
                <div class="promo-play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <span class="promo-play-label">צפו בסרטון</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50/50 reveal">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            השירותים שלי
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            איך אני יכולה לעזור?
          </h2>
          <p class="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            ליווי מקצועי ואישי בכל תחומי הביטוח והפיננסים
          </p>
        </div>

        <!-- Service Links - Linktree Style -->
        <span id="life" class="sr-only"></span>
        <div class="flex flex-col gap-3 sm:gap-4 max-w-2xl mx-auto">
          ${config.links.map((link, index) => {
            const isPopular = false;
            return `
            <div class="service-accordion${isPopular ? ' service-popular' : ''}"${link.anchor ? ` id="${link.anchor}"` : ''}>
              <button
                class="service-card group"
                data-accordion="${index}"
                aria-expanded="false"
              >
                <div class="service-icon">
                  ${getServiceIcon(link.icon || 'shield')}
                </div>
                <div class="service-content">
                  <h3 class="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">${link.title}${isPopular ? '<span class="popular-badge">פופולרי</span>' : ''}</h3>
                </div>
                <div class="service-arrow mr-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-chevron transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              <div class="accordion-panel" id="panel-${index}">
                <p class="text-sm text-slate-600 leading-relaxed">${link.description || ''}</p>
                ${link.videos && link.videos.length > 0 ? `
                <div class="accordion-videos">
                  ${link.videos.map(video => `
                    <div class="accordion-video-card" data-video-id="${video.id}">
                      <div class="accordion-video-thumb">
                        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" loading="lazy" />
                        <div class="accordion-video-play">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </div>
                      </div>
                      <span class="accordion-video-title">${video.title}</span>
                    </div>
                  `).join('')}
                </div>
                ` : ''}
              </div>
            </div>
          `}).join('')}

          <!-- License Badge -->
          <div class="mt-6 mb-3 p-3 bg-primary-50 border border-primary-100 rounded-xl text-center">
            <p class="text-xs sm:text-sm text-primary-700 font-medium leading-relaxed">
              בעלת רישיון סוכן ביטוח פנסיוני מטעם רשות שוק ההון, ביטוח וחיסכון
            </p>
          </div>

          <!-- Trust Indicators - Inline -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 mb-4">
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">10+</div>
              <div class="text-xs md:text-sm text-slate-500">שנות ניסיון</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div class="text-xs md:text-sm text-slate-500">שקיפות מלאה</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">א-ת</div>
              <div class="text-xs md:text-sm text-slate-500">מעטפת שירות מלאה</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-red-500 mb-1">&#10084;</div>
              <div class="text-xs md:text-sm text-slate-500">ליווי אישי</div>
            </div>
          </div>

          <!-- CTA Button for Appointment -->
          <a
            href="#contact"
            class="mt-2 py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-2xl font-bold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            לתיאום פגישה
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50/50 reveal">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Profile Image -->
          <div class="flex-shrink-0">
            <picture>
              <source srcset="/profile.png" />
              <img
                src="/profile.png"
                alt="תמונת פרופיל של ${config.profile.name}"
                class="w-52 h-52 md:w-64 md:h-64 rounded-3xl object-cover shadow-xl border-4 border-white"
                width="512"
                height="512"
                loading="lazy"
              />
            </picture>
          </div>
          <!-- Text Content -->
          <div class="text-center md:text-right">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              הדרך שלי אליכם
            </h2>
            <p class="text-primary-600 font-medium text-base md:text-lg mb-4">אספר על עצמי בקצרה.</p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              פסקה ראשונה: מי אתם, במה אתם עוסקים ומה הרקע המקצועי שלכם.
            </p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              פסקה שנייה: הגישה שלכם ומה מייחד את השירות.
            </p>
            <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              פסקה שלישית: משפט סיום שמזמין את הגולש לשיחה.
            </p>
            <a href="#contact" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              <span>בואו נדבר</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Logo Strip -->
    <section class="py-14 md:py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <p class="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-10">עובדת מול חברות הביטוח והפיננסים המובילות</p>
      <div class="partners-marquee-wrapper">
        <div class="partners-marquee-track">
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%94%D7%A4%D7%A0%D7%99%D7%A7%D7%A1.png" alt="הפניקס" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%94%D7%A8%D7%90%D7%9C.png" alt="הראל" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9B%D7%9C%D7%9C%20%D7%91%D7%99%D7%98%D7%95%D7%97.png" alt="כלל" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%A0%D7%95%D7%A8%D7%94.png" alt="מנורה" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F.png" alt="איילון" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%99%D7%98%D7%91.webp" alt="מיטב" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%95%D7%A8.png" alt="מור" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%A4%D7%A1%D7%A4%D7%95%D7%A8%D7%98.png" alt="פספורט" loading="lazy" /></div>
          <div class="partner-logo"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%92%D7%93%D7%9C.png" alt="מגדל" loading="lazy" /></div>
          <!-- Duplicate set for seamless loop -->
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%94%D7%A4%D7%A0%D7%99%D7%A7%D7%A1.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%94%D7%A8%D7%90%D7%9C.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9B%D7%9C%D7%9C%20%D7%91%D7%99%D7%98%D7%95%D7%97.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%A0%D7%95%D7%A8%D7%94.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%99%D7%98%D7%91.webp" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%95%D7%A8.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%A4%D7%A1%D7%A4%D7%95%D7%A8%D7%98.png" alt="" loading="lazy" /></div>
          <div class="partner-logo" aria-hidden="true"><img src="/%D7%9C%D7%95%D7%92%D7%99%D7%9D%20%D7%97%D7%91%D7%A8%D7%95%D7%AA%20%D7%91%D7%99%D7%98%D7%95%D7%97/%D7%9C%D7%95%D7%92%D7%95%20%D7%9E%D7%92%D7%93%D7%9C.png" alt="" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-14 md:py-24 bg-slate-50/70 reveal">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            מה אומרים הלקוחות
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Testimonial 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg" style="background: linear-gradient(135deg, #246564, #0ea5e9)">ק</div>
              <div>
                <h4 class="font-semibold text-slate-800">שם הממליץ</h4>
                <div class="flex text-yellow-400" role="img" aria-label="דירוג 5 מתוך 5 כוכבים">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed">
              <span class="font-semibold text-primary-600">כותרת קצרה!</span> כאן נכנס טקסט המלצה אמיתי מלקוח - שניים עד ארבעה משפטים על החוויה ועל התוצאה.
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg" style="background: linear-gradient(135deg, #a67649, #ce9968)">א</div>
              <div>
                <h4 class="font-semibold text-slate-800">שם הממליצה</h4>
                <div class="flex text-yellow-400" role="img" aria-label="דירוג 5 מתוך 5 כוכבים">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed">
              המלצה שנייה: <span class="font-semibold text-primary-600">כותרת קצרה!</span> טקסט המלצה אמיתי נוסף מלקוח - שניים עד ארבעה משפטים.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-14 md:py-24 bg-gradient-to-b from-slate-50/50 to-white reveal">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          שיחת בדיקה ראשונית
        </h2>
        <p class="text-slate-500 text-base md:text-lg mb-2 max-w-xl mx-auto">
          נבדוק יחד מה יש לכם, מה חסר, ואיפה אפשר לשפר
        </p>
        <p class="text-slate-400 text-sm mb-8 md:mb-10">
          א'-ה' 09:00-17:00 | מענה בוואטסאפ גם מעבר לשעות הפעילות
        </p>

        <!-- WhatsApp CTA Button -->
        <div class="max-w-md mx-auto mb-8">
          <a
            href="https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('היי, הגעתי מהאתר ואשמח לשמוע פרטים. מתי נוח לדבר?')}"
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
          <p class="text-slate-400 text-sm mt-3">מענה תוך דקות | ללא התחייבות</p>
        </div>

        <!-- Social proof -->
        <p class="text-slate-400 text-sm">
          עוקבים אחרי בתוכן פיננסי?
          <a
            href="https://instagram.com/your_handle"
            class="text-primary-500 hover:text-primary-400 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >@your_handle</a>
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-6 md:py-8" role="contentinfo">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <!-- Legal Disclaimer - Collapsible -->
        <details class="footer-disclaimer text-right mb-4 max-w-3xl mx-auto">
          <summary class="cursor-pointer text-white/60 hover:text-white/80 text-xs transition-colors select-none flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-disclaimer-chevron transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
            גילוי נאות והבהרה משפטית
          </summary>
          <div class="mt-3 text-white/50 text-xs leading-relaxed space-y-2 border-t border-white/10 pt-3">
            <p>האמור באתר זה אינו מהווה ייעוץ פנסיוני, ייעוץ השקעות או שיווק השקעות כהגדרתם בדין, ואינו מהווה תחליף לייעוץ אישי המותאם לצרכיו של כל אדם.</p>
            <p>השירותים המוצעים כרוכים בעמלות ו/או תגמולים המשולמים על-ידי הגופים המוסדיים, בהתאם להסדרי העמלות הקבועים בחוק.</p>
            <p>אין באמור באתר זה משום התחייבות להשגת תשואה כלשהי ו/או הבטחת רווחים.</p>
            <p>כל פעולה תיעשה לאחר קבלת ייעוץ אישי, בחינת צרכים והבנת מאפייני הלקוח.</p>
          </div>
        </details>

        <!-- Footer Logo -->
        <div class="mb-5">
          <img
            src="/favicon.svg"
            alt="לוגו"
            class="w-32 mx-auto drop-shadow-lg"
            style="height: auto;"
          />
        </div>

        <p class="text-white text-sm mb-2">
          ${config.profile.name} | ${config.profile.title}
        </p>
        <nav aria-label="קישורים משפטיים" class="text-xs text-white/70">
          <a href="/privacy" class="hover:text-white transition-colors">מדיניות פרטיות</a>
          <span class="mx-2">|</span>
          <a href="/terms" class="hover:text-white transition-colors">תקנון</a>
          <span class="mx-2">|</span>
          <span>&copy; ${new Date().getFullYear()}</span>
        </nav>
      </div>
    </footer>

    <!-- Cookie Notice Banner -->
    <div id="cookie-banner" class="cookie-banner hidden">
      <div class="cookie-banner-content">
        <p class="cookie-banner-text">
          האתר משתמש בעוגיות לשיפור חוויית השימוש.
          <a href="/privacy" class="cookie-link">מדיניות פרטיות</a>
        </p>
        <button id="cookie-dismiss" class="cookie-btn cookie-btn-accept">הבנתי</button>
      </div>
    </div>
  `;
}

function getServiceIcon(icon: string): string {
  const icons: Record<string, string> = {
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    car: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8c-.3.5-.1 1.1.3 1.5l.3.3H3c0 .6.4 1 1 1h.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h4.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h.2c0-.1 0 0 0 0Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'piggy-bank': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    sunset: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>',
    wallet: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  };
  return icons[icon] || icons.shield;
}

