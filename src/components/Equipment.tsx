import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, MessageSquare } from 'lucide-react';

const equipmentList = [
  {
    id: 'jbl-prx-one',
    name: 'JBL PRX ONE',
    image: '/images/Speakers/JBL-PRX-ONE.jpg',
    idealFor: ['Weddings', 'Live Singing Performances', 'Corporate Events', 'Indoor Gatherings'],
    features: [
      'Premium Vocal Clarity',
      'Column Array Design',
      'Clean & Elegant Appearance',
      'Suitable for 100–250 Guests',
    ],
    whatsappMsg: "Hi Audiohive, I'm interested in renting the JBL PRX ONE for my event. Can I get more details and a quote?",
  },
  {
    id: 'yamaha-stagepas',
    name: 'Yamaha Stagepas 1K',
    image: '/images/Speakers/YAMAHA-STAGEPASS.jpg',
    idealFor: ['Private Events', 'Small Weddings', 'Corporate Meetings', 'Outdoor Gatherings'],
    features: [
      'Compact Design',
      'Professional Sound',
      'Quick Setup',
      'Portable System',
    ],
    whatsappMsg: "Hi Audiohive, I'm interested in renting the Yamaha Stagepas 1K for my event. Can I get more details and a quote?",
  },
  {
    id: 'wireless-mics',
    name: 'Wireless Microphones',
    image: '/images/Speakers/Wireless-Microphones.jpg',
    features: [
      'Crystal Clear Audio',
      'Reliable Connectivity',
      'Suitable for Speakers & Performers',
    ],
    whatsappMsg: "Hi Audiohive, I would like to enquire about the Wireless Microphones rental for my event.",
  },
  {
    id: 'audio-mixers',
    name: 'Audio Mixers & Accessories',
    image: '/images/Speakers/Yamaha MG10X Mixing Console.jpg',
    features: [
      'Professional Audio Control',
      'Event-Ready Setup',
      'Compatible with Multiple Systems',
    ],
    whatsappMsg: "Hi Audiohive, I'm looking for professional audio mixers and accessories for my upcoming event.",
  },
];

export default function Equipment() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
    <section ref={ref} id="equipment" className="py-20 md:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DFB15B]/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DFB15B]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Premium Lineup</span>
          <h2 className="section-heading mt-2 mb-4">Professional Equipment Lineup</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Premium equipment trusted by artists, event planners, and businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {equipmentList.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="premium-card flex flex-col md:flex-row gap-8 border border-[#2a2a2a] group overflow-hidden"
            >
              {/* Product Image Wrapper */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-[#2a2a2a] to-[#0B0B0B] rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent pointer-events-none" />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.name}</h3>

                  {/* Optional Ideal For section */}
                  {item.idealFor && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.idealFor.map((use, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-bold bg-[#DFB15B]/10 text-[#DFB15B] border border-[#DFB15B]/20 rounded-full px-2.5 py-0.5"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Features</h4>
                    <ul className="space-y-2">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-[#DFB15B] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2a2a2a]">
                  <a
                    href={`https://wa.me/919213548316?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#DFB15B] hover:bg-[#C59B4C] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
