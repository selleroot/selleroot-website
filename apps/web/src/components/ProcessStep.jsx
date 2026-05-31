
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ number, title, description, index, isLast }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Simple count up animation
      let start = 0;
      const duration = 1000;
      const increment = number / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, controls, number]);

  return (
    <div ref={ref} className="relative flex flex-col items-center text-center px-4">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-border/40 overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: { width: '100%', transition: { duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeInOut" } }
            }}
          />
        </div>
      )}
      
      {/* Step Indicator */}
      <motion.div 
        className="relative z-10 w-16 h-16 bg-background border-4 border-primary text-primary rounded-2xl flex items-center justify-center text-2xl font-extrabold mb-6 shadow-sm will-change-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}
        variants={{
          visible: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.5, delay: index * 0.2 } }
        }}
      >
        {count || number}
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.2 + 0.3 } }
        }}
      >
        <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{description}</p>
      </motion.div>
    </div>
  );
};

export default ProcessStep;
