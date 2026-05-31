import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHover } from '@/lib/animationVariants.js';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const amazonServices = [
    { name: 'Account Reinstatement', path: '/services/amazon-account-reinstatement' },
    { name: 'Section 3 Appeals', path: '/services/section-3-appeals' },
    { name: 'Related Account Appeals', path: '/services/related-account-appeals' },
    { name: 'Video Verification Support', path: '/services/video-verification' },
    { name: 'Funds Release Assistance', path: '/services/funds-release' },
    { name: 'Compliance Documentation', path: '/services/compliance-documentation' },
    { name: 'Account Health Reviews', path: '/services/account-health' },
    { name: 'IP Complaint Support', path: '/services/ip-complaint-support' },
    { name: 'Product Authenticity Appeals', path: '/services/product-authenticity-appeals' },
    { name: 'ASIN Reinstatement', path: '/services/asin-reinstatement' },
    { name: 'Listing Policy Violations', path: '/services/listing-policy-violations' },
  ];

  const walmartServices = [
    { name: 'Account Reinstatement', path: '/services/walmart-account-reinstatement' },
    { name: 'Suspension Appeals', path: '/services/walmart-suspension-appeals' },
    { name: 'Marketplace Recovery', path: '/services/walmart-marketplace-recovery' },
    { name: 'Compliance Support', path: '/services/walmart-compliance-support' },
    { name: 'Performance Review', path: '/services/walmart-performance-review' },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
  };

  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I need help with my account.')}`;

  // Facebook SVG Icon
  const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.06 8.06 0 00-8.062 8.062c0 1.422.372 2.804 1.076 4.032L1.707 22.262l4.247-1.111c1.18.644 2.511.984 3.918.984h.004a8.062 8.062 0 008.062-8.062 8.049 8.049 0 00-2.363-5.703 8.053 8.053 0 00-5.701-2.368"/>
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="Selleroot - Professional Marketplace Consulting"
            title="Selleroot"
          >
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-foreground">Selleroot</span>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Recover. Scale. Automate.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2.5 bg-transparent hover:bg-primary/5 text-foreground/70 hover:text-primary font-semibold rounded-lg data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            Amazon Services
                          </h3>
                          <ul className="space-y-2.5">
                            {amazonServices.map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 font-medium"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Walmart Services
                          </h3>
                          <ul className="space-y-2.5">
                            {walmartServices.map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 font-medium"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Right Side - Social Icons and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
              <a
                href="https://www.facebook.com/selleroot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors text-[#1877F2] hover:text-[#0a66c2]"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/selleroot.hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-instagram-gradient transition-all hover:scale-110 text-foreground/70 hover:text-instagram"
                aria-label="Instagram"
                style={{
                  '--tw-gradient-from': '#F58529',
                  '--tw-gradient-via': '#DD2A7B',
                  '--tw-gradient-to': '#515BD4'
                }}
              >
                <InstagramIcon />
              </a>
            </div>

            {/* WhatsApp CTA Button */}
            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
              <Button
                asChild
                className="bg-[#25D366] text-white hover:bg-[#1da851] rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('header_cta')}
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="touch-target text-foreground hover:bg-primary/5"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-xl">Menu</SheetTitle>
              </SheetHeader>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-3 mt-6 mb-6 justify-center pb-6 border-b border-gray-200">
                <a
                  href="https://www.facebook.com/selleroot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors text-[#1877F2]"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/selleroot.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-instagram-gradient/10 hover:bg-instagram-gradient transition-all hover:scale-110 text-foreground/70 hover:text-white"
                  aria-label="Instagram"
                  style={{
                    background: 'linear-gradient(45deg, rgba(245,133,41,0.1), rgba(221,42,123,0.1), rgba(129,52,175,0.1))'
                  }}
                >
                  <InstagramIcon />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('mobile_header')}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-green-50 hover:bg-green-100 transition-colors text-[#25D366]"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <AnimatePresence>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link.path)}
                        className="touch-target flex items-center text-left text-lg font-semibold text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Mobile Services */}
                <details className="group">
                  <summary className="touch-target flex items-center justify-between text-lg font-semibold text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-muted cursor-pointer list-none">
                    Services
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 ml-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2 px-4">Amazon Services</h4>
                      {amazonServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2 px-4 mt-4">Walmart Services</h4>
                      {walmartServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>

                {/* Mobile CTA */}
                <div className="pt-6 space-y-3 mt-4 border-t border-gray-200">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-lg font-semibold"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Request Free Audit
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-[#25D366] text-white hover:bg-[#1da851] rounded-xl py-6 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { trackWhatsAppClick('mobile_nav'); setIsOpen(false); }}
                      aria-label="Chat with us on WhatsApp"
                    >
                      <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
