
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Notebook as Facebook, Drama as Instagram, MapPin, MessageCircle, Calendar, CircleAlert as AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import OptimizedImage from './OptimizedImage.jsx';
import CalendlyButton from './CalendlyButton.jsx';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const Footer = () => {
  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I need help.')}`;

  const amazonServices = [
    { name: 'Account Reinstatement', path: '/services/amazon-account-reinstatement' },
    { name: 'Section 3 Appeals', path: '/services/section-3-appeals' },
    { name: 'Video Verification Support', path: '/services/video-verification' },
    { name: 'Funds Release', path: '/services/funds-release' },
    { name: 'Compliance Documentation', path: '/services/compliance-documentation' },
    { name: 'Account Health Reviews', path: '/services/account-health' },
  ];

  const walmartServices = [
    { name: 'Account Reinstatement', path: '/services/walmart-account-reinstatement' },
    { name: 'Suspension Appeals', path: '/services/walmart-suspension-appeals' },
  ];

  const resources = [
    { name: 'Amazon Reinstatement Guide', path: '/blog/amazon-reinstatement-guide' },
    { name: 'Section 3 Appeals Guide', path: '/blog/section-3-appeals-guide' },
    { name: 'Video Verification Prep', path: '/blog/video-verification-prep' },
    { name: 'Account Health Management', path: '/blog/account-health-management' },
  ];

  return (
    <motion.footer
      className="bg-primary text-primary-foreground pt-20 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 touch-target flex items-center">
              <OptimizedImage
                src="/SELLEROOTLOGO_copytp.png"
                alt="Selleroot Logo"
                className="h-16 w-auto bg-transparent object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed text-sm mb-6 pr-4">
              Professional marketplace consulting for Amazon and Walmart sellers. We help sellers navigate account recovery, compliance challenges, and marketplace growth with transparency and expertise.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/selleroot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 touch-target rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/selleroot.hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 touch-target rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="w-10 h-10 touch-target rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="mailto:info@selleroot.com" className="text-primary-foreground/70 hover:text-white transition-colors">
                  info@selleroot.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer_contact')}
                  className="text-primary-foreground/70 hover:text-white transition-colors"
                >
                  +91 81781 21217
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Amazon Services</h4>
            <ul className="space-y-3">
              {amazonServices.map((service, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Walmart Services</h4>
            <ul className="space-y-3">
              {walmartServices.map((service, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-4 mt-8">Resources</h4>
            <ul className="space-y-3">
              {resources.slice(0, 3).map((resource, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <Link
                    to={resource.path}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1"
                  >
                    {resource.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  About Selleroot
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Resources & Blog
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Contact Us
                </Link>
              </motion.li>
            </ul>

            <div className="mt-8">
              <CalendlyButton
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm font-semibold w-full justify-center"
                text="Book Free Audit"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="border-t border-white/10 pt-8 mb-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                <strong className="text-white">Disclaimer:</strong> Selleroot is an independent consulting company and is not affiliated with, endorsed by, or operated by Amazon, Walmart, or any marketplace. We provide professional consulting services to help sellers navigate marketplace policies and compliance requirements.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Selleroot. All rights reserved.
          </p>
          <div className="flex items-center flex-wrap gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="/disclaimer" className="text-sm text-primary-foreground/50 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);
