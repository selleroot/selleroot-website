
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I would like to book a free account audit.')}`;

  // Facebook SVG Icon
  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  // Instagram SVG Icon - Official Logo
  const InstagramIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );

  // WhatsApp SVG Icon
  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.06 8.06 0 00-8.062 8.062c0 1.422.372 2.804 1.076 4.032L1.707 22.262l4.247-1.111c1.18.644 2.511.984 3.918.984h.004a8.062 8.062 0 008.062-8.062 8.049 8.049 0 00-2.363-5.703 8.053 8.053 0 00-5.701-2.368"/>
    </svg>
  );

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
          {/* Company Info */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/#services" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Amazon Services */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Amazon Services</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/amazon-account-reinstatement" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Account Reinstatement
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/section-3-appeals" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Section 3 Appeals
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/related-account-appeals" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Related Account Appeals
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/account-health" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Account Health Support
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Walmart Services */}
          <motion.div variants={staggerItem}>
            <h4 className="font-semibold text-lg mb-6">Walmart Services</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/walmart-account-reinstatement" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Account Recovery
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/walmart-suspension-appeals" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Suspension Appeals
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <Link to="/services/walmart-compliance-support" className="text-sm text-primary-foreground/70 hover:text-white transition-colors block py-1">
                  Compliance Support
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="mailto:info@selleroot.com" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
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
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/selleroot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors text-white"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/selleroot.hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all hover:scale-110 text-white hover:text-white"
                aria-label="Instagram"
                style={{
                  background: 'rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <InstagramIcon />
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={staggerItem}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Need Help With Your Account?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Get expert guidance on account recovery, compliance, and marketplace success.
          </p>
          <Button
            asChild
            className="bg-white text-primary hover:bg-gray-50 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer_cta')}
            >
              <WhatsAppIcon />
              Book Free Account Audit
            </a>
          </Button>
        </motion.div>

        {/* Bottom */}
        <motion.div variants={staggerItem} className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Selleroot. All Rights Reserved.</p>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed">
            Selleroot is an independent consulting company and is not affiliated with, endorsed by, or operated by Amazon, Walmart, or any marketplace.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
