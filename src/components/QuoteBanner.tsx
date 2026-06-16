import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageSquare, FileText } from 'lucide-react';

export default function QuoteBanner() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={ref}
      id="quote"
      className="py-12 md:py-16 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DFB15B]/10 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DFB15B] to-transparent" />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Planning an <span className="text-[#DFB15B]">Event?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get a customized quotation tailored to your event requirements within minutes. We deliver crystal-clear audio experiences across Ahmedabad and Gujarat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-[#DFB15B] hover:bg-[#C59B4C] text-white font-bold rounded-xl transition-all shadow-glow-red flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              Get Instant Quote
            </button>

            <a
              href="https://wa.me/919213548316?text=Hi%20Audiohive,%20I'm%20planning%20an%20event%20and%20need%20a%20quotation%20for%20the%20sound%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Now
            </a>

            <a
              href="tel:+919213548316"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#2a2a2a] hover:border-white text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5 text-[#DFB15B]" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
