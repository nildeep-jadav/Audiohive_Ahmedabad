import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Speaker,
  Users,
  Mic2,
  ShieldCheck,
  Tag,
  Clock,
  Sparkles,
  Headphones,
} from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: 'Premium Sound Systems',
    description: 'High-end column arrays and mixers from industry leaders like JBL and Yamaha.',
    icon: Speaker,
  },
  {
    id: 2,
    title: 'Professional Setup Team',
    description: 'Trained technical professionals who handle installation and acoustics meticulously.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Trusted by Artists',
    description: 'Acclaimed singers, DJs, and speakers trust us to deliver their sound perfectly.',
    icon: Mic2,
  },
  {
    id: 4,
    title: 'Reliable Event Support',
    description: 'On-site technical support to ensure smooth operation throughout the event.',
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: 'Transparent Pricing',
    description: 'Honest rates with no hidden fees, providing maximum value for your event.',
    icon: Tag,
  },
  {
    id: 6,
    title: 'On-Time Execution',
    description: 'Strict adherence to event timelines with early setup and rigorous testing.',
    icon: Clock,
  },
  {
    id: 7,
    title: 'Clean & Elegant Setups',
    description: 'Aesthetic cable management and sleek speaker designs that blend into the venue.',
    icon: Sparkles,
  },
  {
    id: 8,
    title: 'Dedicated Customer Support',
    description: 'Attentive, friendly service from initial quotation to event wrap-up.',
    icon: Headphones,
  },
];

export default function WhyAudiohive() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  } as const;

  return (
    <section ref={ref} id="why-choose" className="py-12 md:py-20 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Why Audiohive</span>
          <h2 className="section-heading mt-2 mb-4">Why Choose Audiohive</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Reliable sound solutions backed by professional service and premium equipment.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={advantage.id}
                variants={itemVariants}
                whileHover={{
                  boxShadow: '0 0 30px rgba(223, 177, 91, 0.2)',
                  borderColor: '#DFB15B',
                  y: -5,
                }}
                className="premium-card border border-[#2a2a2a] group transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-14 h-14 rounded-xl bg-[#DFB15B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DFB15B]/20 transition-all duration-300 mb-6">
                  <IconComponent className="w-7 h-7 text-[#DFB15B]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
