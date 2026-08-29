// Configuration file - EDIT THIS FILE to customize the landing page.
// All page content lives here: profile, contact, service links, videos, theme.

export interface Link {
  title: string;
  url: string;
  icon?: string;
  color?: string;
  description?: string;
  anchor?: string;
  videos?: YouTubeShort[];
  localVideo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface YouTubeShort {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
}

export interface Config {
  profile: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  links: Link[];
  socialLinks: SocialLink[];
  youtubeShorts: YouTubeShort[];
  testimonials: Testimonial[];
  galleryItems: GalleryItem[];
  theme: {
    primaryColor: string;
    backgroundColor: string;
  };
}

export const config: Config = {
  profile: {
    name: "מיכאל",
    title: "ספורטתרפיסט | דיקור יבש, טיפול ידני וקינזיותייפינג",
    bio: "מלווה מתאמנים ואנשים עם אורח חיים פעיל בטיפול בכאב ובשיקום — בקליניקה באשקלון או עד הבית שלכם.",
    image: "/profile.jpg",
  },
  contact: {
    phone: "054-269-0370",
    whatsapp: "972542690370", // international format, no + sign
    email: "melovy00@gmail.com",
  },
  links: [
    {
      title: "כאבי גב",
      url: "#contact",
      icon: "bone",
      anchor: "back-pain",
      description: "אבחון מקור הכאב וטיפול ידני ממוקד, בשילוב דיקור יבש וקינזיותייפינג בהתאם לצורך — כדי לחזור לתפקוד מלא, לא רק להקל לרגע.",
      videos: [],
    },
    {
      title: "כאבי כתפיים",
      url: "#contact",
      icon: "move",
      anchor: "shoulder-pain",
      description: "טיפול בהגבלות תנועה, מתחים ותפוסים באזור הכתף והצוואר — פופולרי במיוחד אצל מי שמתאמן עם משקולות או ספורטי חזרה.",
      videos: [],
      localVideo: "/videos/shoulder-tape.mp4",
    },
    {
      title: "שיקום מפציעות ספורט",
      url: "#contact",
      icon: "activity",
      anchor: "sports-injury",
      description: "ליווי מובנה מרגע הפציעה ועד חזרה בטוחה לאימונים — נקעים, מתיחות ופציעות חוזרות שמפריעות לך להתאמן כרגיל.",
      videos: [],
    },
    {
      title: "שימור ומניעת פציעות",
      url: "#contact",
      icon: "shield",
      anchor: "prevention",
      description: "בדיקה תפקודית וטיפול תקופתי למי שמתאמן באופן קבוע ורוצה למנוע פציעות לפני שהן קורות, ולא רק לטפל אחרי.",
      videos: [],
    },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/michael_sportstherapy",
      icon: "instagram",
    },
  ],
  youtubeShorts: [],
  galleryItems: [
    { type: "image", src: "/gallery/cupping-back.jpg", alt: "טיפול כוסות רוח לגב" },
    { type: "video", src: "/videos/shoulder-tape.mp4", poster: "/gallery/shoulder-tape-poster.jpg", alt: "טייפינג לכתף" },
    { type: "video", src: "/videos/shoulder-strength-test.mp4", poster: "/gallery/shoulder-strength-test-poster.jpg", alt: "בדיקת כוח כתף" },
    { type: "video", src: "/videos/aviv-assessment.mp4", poster: "/gallery/aviv-assessment-poster.jpg", alt: "אבחון מקור הכאב" },
    { type: "video", src: "/videos/upper-back-tissue-massage.mp4", poster: "/gallery/upper-back-tissue-massage-poster.jpg", alt: "עיסוי רקמות גב עליון" },
    { type: "video", src: "/videos/sivan-cupping-back.mp4", poster: "/gallery/sivan-cupping-back-poster.jpg", alt: "טיפול כוסות רוח לגב" },
    { type: "image", src: "/gallery/michael-clinic.jpg", alt: "מיכאל בקליניקה" },
  ],
  testimonials: [
    {
      name: "מישל גרשקוביץ",
      quote: "היום עשיתי אימון ראשון אחרי הטיפול וכבר הצלחתי לעלות במשקלים וכלל בלי כאב כמו לפני. הייתי קודם אצל 2 מטפלים ולא באמת היו תוצאות — אצלך כבר מהטיפול הראשון אני מרגיש תוצאות.",
    },
    {
      name: "ארנסט א.",
      quote: "עיסוי רפואי מאוד מקצועי. מיכאל בן אדם שיודע ואוהב את המקצוע. מסביר כל צעד שהוא עושה. חוץ מזה איש מאוד נחמד ואחראי! ממליץ בחום!",
    },
    {
      name: "אביב",
      quote: "אחשלי לא יצא לי להתאמן הרבה רק אימון אחד אחרי הטיפול אבל היה טוב, לא הרגשתי איזה כאב ובכלל הגוף גם מרגיש יותר קליל משוחרר.",
    },
  ],
  theme: {
    primaryColor: "#0d9488",
    backgroundColor: "#faf9f7",
  },
};
