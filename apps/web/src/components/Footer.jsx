
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Instagram, Youtube, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import OptimizedImage from './OptimizedImage.jsx';
import CalendlyButton from './CalendlyButton.jsx';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const Footer = () => {
  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent('Hi Selleroot, I need help.')}`;

  return (
    <motion.footer 
      className="bg-primary text-primary-foreground pt-20 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 touch-target flex items-center">
              <OptimizedImage
                src="https://horizons-cdn.hostinger.com/b4833c16-8b03-4363-96fb-f8b7820bfb14/9135cab417c9268889cd0f43fb4fac2b.png"
                alt="Selleroot Logo"
                className="h-10 w-auto brightness-0 invert bg-transparent object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed text-sm mb-8 pr-4">
              Professional Amazon seller consulting. We help sellers recover suspended accounts, maintain compliance, and build sustainable marketplace businesses globally.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 touch-target rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Selleroot', 'Our Services', 'Resources & FAQ', 'Contact Us'].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link to={link === 'Contact Us' ? '/contact' : '#'} className="text-sm touch-target flex items-center text-primary-foreground/70 hover:text-white transition-colors">{link}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Core Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Account Reinstatement', path: '/services/account-reinstatement' },
                { name: 'Section 3 Appeals', path: '/services/section-3-appeals' },
                { name: 'Video Verification', path: '/services/video-verification' },
                { name: 'Funds Release', path: '/services/funds-release' }
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link to={link.path} className="text-sm touch-target flex items-center text-primary-foreground/70 hover:text-white transition-colors">{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 group">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@selleroot.com" className="hover:text-white transition-colors touch-target flex items-center">info@selleroot.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 group">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('footer')} className="flex items-start gap-3 hover:text-white transition-colors touch-target">
                  <MessageCircle className="h-5 w-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 group">
                <CalendlyButton asChild variant="link" className="p-0 h-auto font-normal text-primary-foreground/70 hover:text-white hover:no-underline">
                  <span className="flex items-start gap-3 touch-target cursor-pointer">
                    <Calendar className="h-5 w-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    Book Consultation
                  </span>
                </CalendlyButton>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 group">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Global Support for<br />Amazon Sellers</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Selleroot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-white transition-colors touch-target flex items-center">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-primary-foreground/50 hover:text-white transition-colors touch-target flex items-center">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);
