import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LogoItem {
  name: string;
  src: string;
}

const clientLogos: LogoItem[] = [
  { name: 'Courtyard by Marriott', src: '/images/Clientele/Courtyard by merriot.png' },
  { name: 'The Fern Residency', src: '/images/Clientele/Fern Residency.png' },
  { name: 'Le Méridien', src: '/images/Clientele/Le Meridien.png' },
  { name: 'Palladium Ahmedabad', src: '/images/Clientele/Palladium.png' },
  { name: 'Phoenix Marketcity', src: '/images/Clientele/Phoenix maharastra.png' },
  { name: 'Taj Skyline', src: '/images/Clientele/Taj Skyline.png' },
];

export default function ClientLogos() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      ref={ref} 
      className="py-12 md:py-16 bg-[#0B0B0B] relative overflow-hidden select-none border-b border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#DFB15B] font-bold">Trusted Partner</span>
          <h2 className="section-heading mt-2 text-2xl md:text-3xl text-gray-400">Prestigious Clientele</h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full flex items-center py-4"
      >
        {/* Left & Right Fade Mask overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="group flex overflow-hidden w-full">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-16 md:gap-28 pr-16 md:pr-28 animate-marquee group-hover:[animation-play-state:paused]">
            {clientLogos.map((logo, idx) => (
              <div 
                key={`logo-1-${idx}`} 
                className="flex items-center justify-center w-28 md:w-40 h-16"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicated for seamless infinite loop) */}
          <div className="flex shrink-0 items-center gap-16 md:gap-28 pr-16 md:pr-28 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {clientLogos.map((logo, idx) => (
              <div 
                key={`logo-2-${idx}`} 
                className="flex items-center justify-center w-28 md:w-40 h-16"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Track 3 (Extra duplicate for wide screens) */}
          <div className="flex shrink-0 items-center gap-16 md:gap-28 pr-16 md:pr-28 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {clientLogos.map((logo, idx) => (
              <div 
                key={`logo-3-${idx}`} 
                className="flex items-center justify-center w-28 md:w-40 h-16"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
