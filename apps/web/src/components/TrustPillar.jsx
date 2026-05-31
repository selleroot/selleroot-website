
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerItem, floatingAnimation } from '@/lib/animationVariants.js';

const TrustPillar = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col h-full will-change-transform-opacity"
    >
      <Card className="flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 bg-card rounded-2xl overflow-hidden">
        <CardHeader className="flex flex-col items-center text-center p-8">
          <motion.div 
            variants={floatingAnimation}
            animate="animate"
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          </motion.div>
          <CardTitle className="text-xl font-bold text-foreground text-balance mb-3">{title}</CardTitle>
          <CardDescription className="text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default TrustPillar;
