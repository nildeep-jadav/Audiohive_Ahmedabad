import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Image as ImageIcon, Video, RotateCw } from 'lucide-react';

const categories = [
  'All',
  'Weddings',
  'Corporate Events',
  'Live Performances',
  'Private Celebrations',
  'Government Events',
];

const galleryItems = [
  {
    id: 1,
    title: 'Grand Palace Reception Setup',
    category: 'Weddings',
    type: 'Setup Photo',
    icon: ImageIcon,
    image: '/images/gallery_wedding.png',
  },
  {
    id: 2,
    title: 'Annual Leadership Summit',
    category: 'Corporate Events',
    type: 'Event Video',
    icon: Video,
    image: '/images/gallery_corporate.png',
    isVideo: true,
  },
  {
    id: 3,
    title: 'Acoustic Concert Sound Check',
    category: 'Live Performances',
    type: 'Event Photo',
    icon: ImageIcon,
    image: '/images/gallery_live.png',
  },
  {
    id: 4,
    title: 'Luxury Rooftop Sundowner',
    category: 'Private Celebrations',
    type: 'Before & After Venue Transformation',
    icon: RotateCw,
    image: '/images/gallery_celebration.png',
    isBeforeAfter: true,
  },
  {
    id: 5,
    title: 'State VIP Press Meet',
    category: 'Government Events',
    type: 'Setup Photo',
    icon: ImageIcon,
    image: '/images/gallery_government.png',
  },
  {
    id: 6,
    title: 'DJ Sangeet Night Party',
    category: 'Weddings',
    type: 'Instagram Reel',
    icon: Video,
    image: '/images/hero_bg.png',
    isReel: true,
  },
];

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section ref={ref} id="gallery" className="py-20 md:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Showcase</span>
          <h2 className="section-heading mt-2 mb-4">Our Gallery</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            A glimpse of our work across weddings, corporate events, and live performances.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#DFB15B] text-white shadow-glow-red'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#2a2a2a] hover:border-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const TypeIcon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-pointer rounded-3xl overflow-hidden h-80 md:h-[340px] border border-[#2a2a2a] hover:border-[#DFB15B]/40 transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent pointer-events-none" />

                  {/* Play Overlay for Videos and Reels */}
                  {(item.isVideo || item.isReel) && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-[#DFB15B]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Icon Indicator (Top Right) */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#0B0B0B]/80 border border-[#2a2a2a] backdrop-blur-sm text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                    <TypeIcon className="w-3.5 h-3.5 text-[#DFB15B]" />
                    <span>{item.type}</span>
                  </div>

                  {/* Content Details (Bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Light Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#DFB15B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
