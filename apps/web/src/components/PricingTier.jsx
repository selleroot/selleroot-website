
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingTier = ({ name, description, features, isRecommended, index }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isRecommended ? 'md:scale-105' : ''}
    >
      <Card className={`h-full flex flex-col ${isRecommended ? 'ring-2 ring-primary shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-200 border-border`}>
        <CardHeader>
          {isRecommended && (
            <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full w-fit mb-2">
              Recommended
            </div>
          )}
          <CardTitle className="text-2xl font-bold text-balance">{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button
            onClick={scrollToContact}
            className={`w-full transition-all duration-200 active:scale-[0.98] ${
              isRecommended
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
            }`}
          >
            Get started
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingTier;
