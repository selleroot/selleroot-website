
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { pulseAnimation, floatingAnimation } from '@/lib/animationVariants.js';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const FloatingWhatsAppButton = ({
  phoneNumber = '918178121217',
  message = 'Hi Selleroot, I need help with my Amazon seller account.'
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50 touch-target"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 200 }}
      >
        <motion.div variants={floatingAnimation} animate="animate">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('floating_button')}
            className="bg-[#25D366] text-white rounded-full p-3 sm:p-4 shadow-xl flex items-center justify-center group relative will-change-transform touch-target"
            variants={pulseAnimation}
            animate="animate"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            
            <span className="absolute -top-12 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg hidden sm:block">
              Chat with an Expert
              <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-foreground rotate-45" />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(FloatingWhatsAppButton);
