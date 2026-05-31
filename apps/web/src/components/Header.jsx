
import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
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
    { label: 'Services', path: '/#services' },
    { label: 'Resources', path: '/#faq' },
    { label: 'About', path: '/#about' },
    { label: 'Contact', path: '/contact' },
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

  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent('Hi Selleroot, I need help.')}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <OptimizedImage
                src="https://horizons-cdn.hostinger.com/b4833c16-8b03-4363-96fb-f8b7820bfb14/9135cab417c9268889cd0f43fb4fac2b.png"
                alt="Selleroot - Amazon Seller Recovery & Compliance Services"
                className="h-9 sm:h-10 w-auto bg-transparent object-contain transition-opacity duration-300 group-hover:opacity-80"
                priority={true}
                aspectRatio="auto"
              />
              <div className="hidden lg:flex flex-col">
                <span className="font-bold text-xl leading-none text-foreground group-hover:text-primary transition-colors duration-200">Selleroot</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-1">Recover. Scale. Automate.</span>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
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
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
              <CalendlyButton className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm rounded-xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
            </motion.div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isScrolled ? 'text-foreground' : 'text-foreground lg:text-white'}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="touch-target flex items-center text-left text-lg font-semibold text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 space-y-4">
                  <CalendlyButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
                  <Button
                    asChild
                    variant="outline"
                    className="w-full touch-target rounded-xl py-6 text-lg font-semibold flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={() => { trackWhatsAppClick('mobile_nav'); setIsOpen(false); }}
                      aria-label="Chat with us on WhatsApp"
                    >
                      <MessageSquare className="w-5 h-5 text-[#25D366]" /> WhatsApp Us
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
