import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Globe } from 'lucide-react';

const categories = ['All', 'Clients', 'Artists', 'Event Planners'];

const testimonials = [
  {
    id: 1,
    name: 'Priya Patel',
    role: 'Bride',
    category: 'Clients',
    content: "Audiohive made our wedding night unforgettable. The JBL PRX ONE columns looked incredibly neat and the sound clarity during the sangeet performances was absolutely pristine!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    role: 'Live Vocalist & Singer',
    category: 'Artists',
    content: "As a singer, the monitor response and sound clarity on stage are critical. Audiohive's team did a fantastic setup. The vocal response of their systems is world-class.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Devang Shah',
    role: 'Managing Director, Elite Events',
    category: 'Event Planners',
    content: 'For corporate events, everything must run on a tight schedule. Audiohive is always early, setups are clean with zero cable clutter, and their technician is exceptionally professional.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Aarav Trivedi',
    role: 'Private Celebrant',
    category: 'Clients',
    content: 'Rented the Yamaha Stagepas 1K for an outdoor family sangeet. Setup was done in under 15 minutes, and the sound coverage across the entire lawn was impressive for its compact size.',
    rating: 5,
  },
  {
    id: 5,
    name: 'DJ Nihar',
    role: 'Professional DJ',
    category: 'Artists',
    content: 'I have performed at multiple high-profile sangeets and weddings in Ahmedabad. Audiohive provides systems that pack a serious punch. Reliable, clean, and top-of-the-line gear.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : testimonials.filter(item => item.category === selectedCategory);

  return (
    <section ref={ref} id="testimonials" className="py-12 md:py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#DFB15B]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Reviews</span>
          <h2 className="section-heading mt-2 mb-4">What People Say</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            What our clients, artists, and event planners say about us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Filter Tabs & Testimonial List */}
          <div className="lg:col-span-8 space-y-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#DFB15B] text-white shadow-glow-red'
                      : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#2a2a2a] hover:border-gray-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Testimonials Container */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredTestimonials.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    key={item.id}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative group"
                  >
                    {/* Quotation Icon overlay */}
                    <Quote className="absolute right-8 top-8 w-12 h-12 text-[#DFB15B]/5 group-hover:text-[#DFB15B]/10 transition-colors pointer-events-none" />

                    {/* Left: Stars & User Details */}
                    <div className="md:w-1/3 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                        <p className="text-sm text-[#DFB15B] font-semibold">{item.role}</p>
                      </div>

                      <div className="mt-4 md:mt-0">
                        <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Rating</span>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#DFB15B] text-[#DFB15B]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Review Content */}
                    <div className="md:w-2/3 flex items-center">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                        "{item.content}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Google Review Integration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#DFB15B]" />

              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-md">
                <Globe className="w-8 h-8 text-[#4285F4]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Google Reviews</h3>
                <p className="text-xs text-gray-400">Verified Client Feedback</p>
              </div>

              <div className="space-y-1">
                <div className="text-5xl font-black text-white">4.9</div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4B400] text-[#F4B400]" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Based on 120+ reviews in Ahmedabad</p>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <a
                  href="https://search.google.com/local/reviews?placeid=audiohive_ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-transparent border border-[#2a2a2a] hover:border-white text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Star className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                  Write a Review
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
