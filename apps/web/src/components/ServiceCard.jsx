
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerItem, hoverLift } from '@/lib/animationVariants.js';

const ServiceCard = ({ icon: Icon, title, description, path, index }) => {
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
        <Card className="h-full flex flex-col border-border/50 rounded-2xl overflow-hidden group bg-card transition-colors duration-300 hover:border-primary/30">
          <CardHeader className="p-8 pb-4">
            <motion.div 
              className="w-14 h-14 bg-accent/50 rounded-2xl flex items-center justify-center mb-6 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="h-7 w-7" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-foreground text-balance">{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-6 flex-grow">
            <CardDescription className="text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
          </CardContent>
          {path && (
            <CardFooter className="px-8 pb-8 mt-auto">
              <Link 
                to={path} 
                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-200"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
