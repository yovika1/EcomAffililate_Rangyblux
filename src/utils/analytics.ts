declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;

    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Page
export const trackPageView = () => {
  window.fbq?.("track", "PageView");
};

// Events
export const trackViewContent = () => {
  window.fbq?.("track", "ViewContent");
};

export const trackInitiateCheckout = () => {
  window.fbq?.("track", "InitiateCheckout");
};

export const trackPurchase = () => {
  window.fbq?.("track", "Purchase", {
    value: 0,
    currency: "INR",
  });
};

// GA
export const trackGAPageView = (path: string) => {
  window.gtag?.("config", "G-H434KNLSCP", {
    page_path: path,
  });
};