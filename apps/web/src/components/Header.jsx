
import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare, Notebook as Facebook, Drama as Instagram, Mail, ChevronDown } from 'lucide-react';
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
import CalendlyButton from './CalendlyButton.jsx';
import OptimizedImage from './OptimizedImage.jsx';
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
    { name: 'Amazon Account Reinstatement', path: '/services/amazon-account-reinstatement' },
    { name: 'Amazon Seller Account Recovery', path: '/services/amazon-account-reinstatement' },
    { name: 'Amazon Suspension Appeal', path: '/services/amazon-suspension-appeal' },
    { name: 'Amazon Account Suspension Help', path: '/services/amazon-suspension-help' },
    { name: 'Amazon Suspended Account Help', path: '/services/amazon-suspended-account-help' },
    { name: 'Amazon Appeal Service', path: '/services/amazon-appeal-service' },
    { name: 'Amazon Reinstatement Services', path: '/services/account-reinstatement' },
    { name: 'Section 3 Appeals', path: '/services/section-3-appeals' },
    { name: 'Related Account Appeals', path: '/services/related-account-appeals' },
    { name: 'Video Verification Support', path: '/services/video-verification' },
    { name: 'Funds Release Assistance', path: '/services/funds-release' },
    { name: 'Compliance Documentation', path: '/services/compliance-documentation' },
    { name: 'Account Health Reviews', path: '/services/account-health' },
    { name: 'IP Complaint Support', path: '/services/ip-complaint-support' },
    { name: 'Product Authenticity Appeals', path: '/services/product-authenticity-appeals' },
    { name: 'ASIN Reinstatement Support', path: '/services/asin-reinstatement' },
    { name: 'Listing Policy Violations', path: '/services/listing-policy-violations' },
  ];

  const walmartServices = [
    { name: 'Walmart Account Reinstatement', path: '/services/walmart-account-reinstatement' },
    { name: 'Walmart Suspension Appeals', path: '/services/walmart-suspension-appeals' },
    { name: 'Walmart Marketplace Recovery', path: '/services/walmart-marketplace-recovery' },
    { name: 'Walmart Compliance Support', path: '/services/walmart-compliance-support' },
    { name: 'Walmart Performance Review', path: '/services/walmart-performance-review' },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I need help with my account.')}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 group touch-target flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="Selleroot - Amazon Seller Recovery & Compliance Services"
            title="Selleroot - Amazon Seller Recovery & Compliance Services"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <OptimizedImage
                src="/SELLEROOTLOGO_copytp.png"
                alt="Selleroot - Professional Marketplace Consulting"
                className="h-16 sm:h-20 w-auto bg-transparent object-contain transition-opacity duration-300 group-hover:opacity-90"
                priority={true}
                aspectRatio="auto"
              />
              <div className="hidden lg:flex flex-col">
                <span className="font-bold text-2xl leading-none text-foreground group-hover:text-primary transition-colors duration-200">Selleroot</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Recover. Scale. Automate.</span>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-2 touch-target rounded-lg text-sm font-semibold transition-all duration-200 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 bg-transparent hover:bg-primary/5 text-foreground/80 hover:text-primary font-semibold rounded-lg">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-background rounded-xl shadow-xl border border-border">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            Amazon Services
                          </h3>
                          <ul className="space-y-2">
                            {amazonServices.slice(0, 8).map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Walmart Services
                          </h3>
                          <ul className="space-y-2">
                            {walmartServices.map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
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

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 mr-2">
              <a
                href="https://www.facebook.com/selleroot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/selleroot.hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('header_social')}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@selleroot.com"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors text-primary"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
              <Button
                asChild
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5 rounded-xl font-semibold"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('header_secondary')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
              <CalendlyButton
                text="Book Free Audit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm rounded-xl font-semibold"
              />
            </motion.div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isScrolled ? 'text-foreground' : 'text-foreground'}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-xl">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-2 mt-6 mb-6 justify-center">
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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-green-50 hover:bg-green-100 transition-colors text-[#25D366]"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@selleroot.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

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

                <div className="pt-6 space-y-3 mt-4">
                  <CalendlyButton
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-lg font-semibold"
                    text="Book Free Account Audit"
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="w-full touch-target rounded-xl py-6 text-lg font-semibold flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-green-50"
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
