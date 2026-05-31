
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CalendlyModal from './CalendlyModal.jsx';

const CalendlyButton = ({ 
  text = "Book Consultation", 
  variant = "default", 
  className = "", 
  url,
  size = "lg",
  asChild = false,
  children
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant={variant} 
        size={size} 
        className={`touch-target ${className}`}
        onClick={() => setIsModalOpen(true)}
        asChild={asChild}
      >
        {children || text}
      </Button>

      <CalendlyModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        url={url} 
      />
    </>
  );
};

export default React.memo(CalendlyButton);
