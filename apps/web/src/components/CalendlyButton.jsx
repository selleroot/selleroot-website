
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const CalendlyButton = ({
  text = "Book Free Account Audit",
  variant = "default",
  className = "",
  size = "lg",
  asChild = false,
  children
}) => {
  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I would like to book a free account audit.')}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`touch-target ${className}`}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('audit_button')}
        className="flex items-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        {children || text}
      </a>
    </Button>
  );
};

export default React.memo(CalendlyButton);
