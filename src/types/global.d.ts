// Global type declarations for analytics

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export {};
