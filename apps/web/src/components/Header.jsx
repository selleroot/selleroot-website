
import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare, Notebook as Facebook, Drama as Instagram, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
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
    { label: 'Resources', path: '/blog' },
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
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="Selleroot - Professional Marketplace Consulting"
            title="Selleroot"
          >
            {/* Logo SVG */}
            <svg
              className="h-12 sm:h-14 w-auto"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Blue Dollar Sign */}
              <text x="40" y="55" fontSize="60" fontWeight="bold" textAnchor="middle" fill="#0A2D6F" fontFamily="system-ui, -apple-system, sans-serif">$</text>

              {/* Green Growth Arrow */}
              <g transform="translate(50, 25)">
                <path d="M0 15 L15 0 L15 8 L25 8 L25 10 L15 10 L15 18 Z" fill="#10B94D" />
              </g>
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">Selleroot</span>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Recover. Scale. Automate.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
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
                  <NavigationMenuTrigger className="px-4 py-2.5 bg-transparent hover:bg-primary/5 text-foreground/80 hover:text-primary font-semibold rounded-lg data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
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
                          <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
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
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-gray-200">
              <a
                href="https://www.facebook.com/selleroot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors text-primary hover:text-primary/80"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/selleroot.hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors text-primary hover:text-primary/80"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* WhatsApp CTA Button */}
            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
              <Button
                asChild
                className="bg-[#25D366] text-white hover:bg-[#1da851] rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('header_cta')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
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
              <div className="flex items-center gap-2 mt-6 mb-6 justify-center pb-6 border-b border-gray-200">
                <a
                  href="https://www.facebook.com/selleroot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/selleroot.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('mobile_header')}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors text-[#25D366]"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
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
