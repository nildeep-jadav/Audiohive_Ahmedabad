import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  } as const;

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' as const } },
  } as const;

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
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
    <section id="hero" className="relative min-h-screen bg-[#0B0B0B] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#DFB15B]/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#DFB15B]/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left side - Brand, Heading, Description, Buttons */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-8 lg:col-span-7 flex flex-col justify-center"
          >


            <motion.h1 variants={itemVariants} className="hero-text tracking-tight font-black leading-none">
              Premium Sound.<br />
              <span className="text-[#DFB15B] bg-clip-text text-transparent bg-gradient-to-r from-[#DFB15B] to-[#FFE49E]">
                Elevated Experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Delivering premium sound solutions for weddings, corporate events, concerts, and private celebrations. Trusted by artists, event planners, and businesses throughout Ahmedabad and Gujarat.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => handleScrollTo(e, 'equipment')}
                className="btn-primary cursor-pointer hover:scale-105 transition-transform flex items-center justify-center gap-2 py-4 px-8 text-base shadow-glow-red"
              >
                Explore Equipment
              </button>
              <button
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn-secondary cursor-pointer hover:scale-105 transition-transform flex items-center justify-center gap-2 py-4 px-8 text-base"
              >
                Get Instant Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Showcase */}
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Glowing outer frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#DFB15B] to-[#FFE49E] rounded-3xl opacity-20 filter blur-xl" />

            <div className="relative premium-card p-2 bg-[#1a1a1a] rounded-3xl border border-[#2a2a2a] hover:border-[#DFB15B]/50 transition-all duration-500 max-w-md w-full overflow-hidden shadow-2xl group">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <img
                  src="/images/Audiohive Ahmedabad Hero Image.jpg"
                  alt="Audiohive Premium Event Sound Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

                {/* Event Setup Caption */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Premium Setup</span>
                    <h3 className="text-white text-lg font-bold">JBL PRX ONE Column Arrays</h3>
                  </div>
                  <a
                    href="#gallery"
                    onClick={(e) => handleScrollTo(e, 'gallery')}
                    className="w-10 h-10 rounded-full bg-[#DFB15B] hover:bg-[#C59B4C] flex items-center justify-center text-white transition-colors"
                  >
                    <ArrowDown className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#services"
          onClick={(e) => handleScrollTo(e, 'services')}
          className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors group"
        >
          <span className="uppercase tracking-widest">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-[#DFB15B]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
