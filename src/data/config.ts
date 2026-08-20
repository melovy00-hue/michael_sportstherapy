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
  theme: {
    primaryColor: string;
    backgroundColor: string;
  };
}

export const config: Config = {
  profile: {
    name: "ישראל ישראלי",
    title: "התחום המקצועי שלך - שורת תיאור קצרה",
    bio: "משפט אחד שמסביר מה אתה עושה ולמה כדאי לדבר איתך - בגובה העיניים",
    image: "/profile.png", // put your photo in public/profile.png
  },
  contact: {
    phone: "050-000-0000",
    whatsapp: "972500000000", // international format, no + sign
    email: "hello@example.com",
  },
  links: [
    {
      title: "שירות ראשון",
      url: "#contact",
      icon: "shield",
      anchor: "service1",
      description: "פסקה קצרה שמסבירה את השירות: מה הלקוח מקבל, למה זה חשוב, ומה התוצאה עבורו.",
      videos: [
        { id: "YOUTUBE_ID_1", title: "כותרת סרטון קצר", description: "" },
      ],
    },
    {
      title: "שירות שני",
      url: "#contact",
      icon: "wallet",
      anchor: "service2",
      description: "פסקה קצרה שמסבירה את השירות: מה הלקוח מקבל, למה זה חשוב, ומה התוצאה עבורו.",
      videos: [],
    },
    {
      title: "שירות שלישי",
      url: "#contact",
      icon: "users",
      anchor: "service3",
      description: "פסקה קצרה שמסבירה את השירות: מה הלקוח מקבל, למה זה חשוב, ומה התוצאה עבורו.",
      videos: [],
    },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/your_handle",
      icon: "instagram",
    },
  ],
  youtubeShorts: [
    {
      id: "YOUTUBE_ID_1",
      title: "כותרת סרטון קצר",
      description: "משפט תיאור קצר",
    },
  ],
  theme: {
    primaryColor: "#046bd2",
    backgroundColor: "#f9fafb",
  },
};
