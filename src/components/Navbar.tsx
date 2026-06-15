import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Services', href: '#services' },
  { name: 'Equipment Lineup', href: '#equipment' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Event Types', href: '#events' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Background styling trigger
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracking
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#2a2a2a] py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center"
          >
            <img
              src="/images/Audiohive logo_Logo [White].png"
              alt="Audiohive Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors hover:text-white uppercase ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFB15B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Quick CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919213548316"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg border border-[#2a2a2a]"
            >
              <Phone className="w-4 h-4 text-[#DFB15B]" />
              <span className="font-medium">+91 92135 48316</span>
            </a>
            <a
              href="https://wa.me/919213548316?text=Hi%20Audiohive,%20I'm%20planning%20an%20event%20and%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-bold bg-[#DFB15B] hover:bg-[#C59B4C] text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="https://wa.me/919213548316"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-[#DFB15B]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#0B0B0B]/95 backdrop-blur-lg border-t border-[#2a2a2a] lg:hidden flex flex-col justify-between p-6"
          >
            <div className="flex flex-col gap-6 pt-4">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xl font-bold tracking-wide transition-colors py-2 border-b border-[#1a1a1a] flex items-center justify-between ${
                      isActive ? 'text-[#DFB15B]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className={`text-xs ${isActive ? 'opacity-100' : 'opacity-0'}`}>●</span>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-8">
              <a
                href="tel:+919213548316"
                className="flex items-center justify-center gap-3 text-lg text-white font-semibold py-4 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]"
              >
                <Phone className="w-5 h-5 text-[#DFB15B]" />
                +91 92135 48316
              </a>
              <a
                href="https://wa.me/919213548316?text=Hi%20Audiohive,%20I'm%20planning%20an%20event%20and%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-lg text-white font-bold py-4 rounded-xl bg-[#DFB15B] hover:bg-[#C59B4C] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
