
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

export const trackEvent = (eventName, eventData = {}) => {
  if (import.meta.env.MODE === 'development') {
    console.log(`[Tracking] ${eventName}`, eventData);
  }
  
  const gaId = import.meta.env?.VITE_GA_ID;

  // Ready for GA4 Integration
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventData,
      ...(gaId ? { send_to: gaId } : {})
    });
  }
};

export const reportWebVitals = () => {
  const sendToAnalytics = (metric) => {
    if (import.meta.env.MODE === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value);
    }
    trackEvent('web_vitals', {
      metric_name: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  };

  if (typeof window !== 'undefined') {
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }
};

export const trackWhatsAppClick = (location = 'unknown') => {
  trackEvent('whatsapp_click', { location });
};

export const trackCalendlyOpen = (location = 'unknown') => {
  trackEvent('calendly_open', { location });
};

export const trackFormSubmit = (formName, status) => {
  trackEvent('form_submit', { form_name: formName, status });
};
