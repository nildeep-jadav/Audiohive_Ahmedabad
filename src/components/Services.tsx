import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Speaker, Truck, ShieldCheck, Check } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Premium Sound Rental',
    icon: Speaker,
    description: 'High-performance sound systems for weddings, corporate events, concerts, and private celebrations.',
    features: [
      'JBL PRX ONE Systems',
      'Yamaha Stagepas 1K',
      'Wireless Microphones',
      'Audio Mixers & Accessories',
    ],
  },
  {
    id: 2,
    title: 'Delivery & Setup',
    icon: Truck,
    description: 'Professional transportation, setup, and sound checks to ensure everything is event-ready.',
    features: [
      'Safe Transportation',
      'Professional Setup',
      'Sound Check Support',
      'Venue Assessment',
    ],
  },
  {
    id: 3,
    title: 'Technical Assistance',
    icon: ShieldCheck,
    description: 'Experienced technicians available throughout your event for smooth operation and complete peace of mind.',
    features: [
      'On-Site Technician',
      'Real-Time Monitoring',
      'Quick Troubleshooting',
      'Event Support',
    ],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

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

  return (
    <section ref={ref} id="services" className="py-20 md:py-32 bg-[#0B0B0B] relative">
      {/* Visual background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB15B]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">What We Offer</span>
          <h2 className="section-heading mt-2 mb-4">Complete Sound Solutions for Every Event</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            From premium sound rentals to on-site technical support, we ensure a seamless audio experience from start to finish.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#DFB15B' }}
                className="premium-card flex flex-col justify-between h-full border border-[#2a2a2a] group"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-[#DFB15B]/10 flex items-center justify-center mb-6 group-hover:bg-[#DFB15B]/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-[#DFB15B]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                </div>

                <div className="border-t border-[#2a2a2a] pt-6 mt-auto">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Key Offerings</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#DFB15B]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#DFB15B]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
