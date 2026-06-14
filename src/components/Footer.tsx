import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2a2a2a] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#DFB15B]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, 'hero')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  onClick={(e) => handleScrollTo(e, 'equipment')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Equipment Lineup
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, 'gallery')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#DFB15B]">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, 'hero')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Audiohive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#DFB15B]">Social Media</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/audiohive_ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[#DFB15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[#DFB15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#DFB15B]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DFB15B] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+917004388880"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 70043 88880
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#DFB15B] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@audiohive.in"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@audiohive.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DFB15B] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Ahmedabad, Gujarat
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-8" />

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
          <p>&copy; {currentYear} Audiohive Ahmedabad. All rights reserved.</p>
          <p className="tracking-wide">
            Premium Sound Solutions &bull; Ahmedabad &bull; Gujarat
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/917004388880?text=Hi%20Audiohive,%20I'm%20planning%20an%20event%20and%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 animate-bounce group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="absolute right-16 bg-[#1a1a1a] text-white border border-[#2a2a2a] px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
          Chat With Us
        </span>
      </a>
    </footer>
  );
}
