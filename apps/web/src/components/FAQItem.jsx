
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQItem = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value} className="bg-card border border-border/60 rounded-xl px-6 mb-4 shadow-sm data-[state=open]:border-primary/30 transition-colors">
      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
