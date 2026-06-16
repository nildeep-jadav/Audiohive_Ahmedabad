import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  Briefcase,
  Mic2,
  Crown,
  Flag,
  GraduationCap,
  Users,
  Compass,
} from 'lucide-react';

const eventCategories = [
  { id: 1, name: 'Weddings & Receptions', icon: Heart },
  { id: 2, name: 'Corporate Events', icon: Briefcase },
  { id: 3, name: 'Live Performances', icon: Mic2 },
  { id: 4, name: 'Private Celebrations', icon: Crown },
  { id: 5, name: 'Government Events', icon: Flag },
  { id: 6, name: 'Educational Events', icon: GraduationCap },
  { id: 7, name: 'Society Events', icon: Users },
  { id: 8, name: 'Cultural Programs', icon: Compass },
];

export default function EventTypes() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    initial: { opacity: 0, scale: 0.9, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  } as const;

  return (
    <section ref={ref} id="events" className="py-12 md:py-20 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">What We Power</span>
          <h2 className="section-heading mt-2 mb-4">Events We Power</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Trusted by artists, event planners, and businesses for events of every scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {eventCategories.map((event) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 30px rgba(223, 177, 91, 0.2)',
                  borderColor: '#DFB15B',
                }}
                className="p-8 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] hover:border-[#DFB15B]/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#DFB15B]/10 flex items-center justify-center group-hover:bg-[#DFB15B]/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-[#DFB15B]" />
                </div>
                <span className="font-bold text-white text-base tracking-wide mt-2">
                  {event.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
