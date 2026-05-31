
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerItem, hoverLift } from '@/lib/animationVariants.js';

const DifferentiatorCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="h-full will-change-transform-opacity"
    >
      <motion.div
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        className="h-full"
      >
        <Card className="h-full bg-muted/50 border-0 rounded-2xl group transition-colors duration-300 hover:bg-muted">
          <CardHeader className="p-8">
            <motion.div 
              className="w-12 h-12 bg-background shadow-sm rounded-xl flex items-center justify-center mb-6 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <CardTitle className="text-xl font-bold text-foreground text-balance mb-3">{title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default DifferentiatorCard;
