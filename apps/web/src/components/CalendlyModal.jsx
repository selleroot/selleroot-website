
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { trackCalendlyOpen } from '@/lib/performanceMonitoring';

const CalendlyModal = ({ isOpen, onOpenChange, url = 'https://calendly.com/selleroot/consultation' }) => {
  useEffect(() => {
    if (isOpen) {
      trackCalendlyOpen('modal');
      // Load Calendly script dynamically
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 border-none overflow-hidden bg-background">
        <DialogTitle className="sr-only">Book a Consultation</DialogTitle>
        <DialogDescription className="sr-only">Schedule a meeting via Calendly</DialogDescription>
        {isOpen && (
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url={url}
          ></div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(CalendlyModal);
