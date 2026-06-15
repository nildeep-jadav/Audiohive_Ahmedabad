import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Image as ImageIcon, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'All',
  'Weddings',
  'Corporate Events',
  'Live Performances',
  'Private Celebrations',
];

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: string;
  icon: any;
  src: string;
  isVideo: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Grand Wedding Audio Setup',
    category: 'Weddings',
    type: 'Setup Photo',
    icon: ImageIcon,
    src: '/images/Gallery/Wedding.jpg',
    isVideo: false,
  },
  {
    id: 2,
    title: 'Live Concert Sound Check',
    category: 'Live Performances',
    type: 'Setup Photo',
    icon: ImageIcon,
    src: '/images/Gallery/Live Performance.jpg',
    isVideo: false,
  },
  {
    id: 3,
    title: 'Audio Console & FOH Support',
    category: 'Corporate Events',
    type: 'Console Photo',
    icon: ImageIcon,
    src: '/images/Gallery/Technical Support.jpg',
    isVideo: false,
  },
  {
    id: 4,
    title: 'Elite Banquet Hall Sound Rigging',
    category: 'Weddings',
    type: 'Venue Photo',
    icon: ImageIcon,
    src: '/images/Gallery/Gallery_02.jpg',
    isVideo: false,
  },
  {
    id: 5,
    title: 'Luxury Indoor Event Acoustics',
    category: 'Private Celebrations',
    type: 'Setup Photo',
    icon: ImageIcon,
    src: '/images/Gallery/Gallery_06.jpg',
    isVideo: false,
  },
  {
    id: 6,
    title: 'Audiohive at BMW Gallops Autohaus',
    category: 'Corporate Events',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/Audiohive at BMW Gallops Autohaus.mp4',
    isVideo: true,
  },
  {
    id: 7,
    title: 'Live Outdoor Music Concert',
    category: 'Live Performances',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/29-4-2026.mp4',
    isVideo: true,
  },

  {
    id: 9,
    title: 'Acoustic Live Session',
    category: 'Live Performances',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/01--18-4-2026_1.mp4',
    isVideo: true,
  },
  {
    id: 10,
    title: 'Premium Corporate Launch Sound',
    category: 'Corporate Events',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/2026-03-21-Audiohive-Ahmedabad_1.mp4',
    isVideo: true,
  },
  {
    id: 11,
    title: 'Sangeet Ceremony Sound Setup',
    category: 'Weddings',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/27-2-2026_1.mp4',
    isVideo: true,
  },
  {
    id: 12,
    title: 'Client Testimonial - Pallav Udeshi',
    category: 'Private Celebrations',
    type: 'Testimonial',
    icon: Video,
    src: '/images/Gallery/PALLAV UDESHI TESTIMONIAL_1.mp4',
    isVideo: true,
  },
  {
    id: 13,
    title: 'JBL PRX ONE in Action',
    category: 'Live Performances',
    type: 'Demo Video',
    icon: Video,
    src: '/images/Gallery/Pushkar - JBL PRX ONE - 29012026_1.mp4',
    isVideo: true,
  },
  {
    id: 14,
    title: 'Sound Setup by Sanjaybhai',
    category: 'Weddings',
    type: 'Setup Video',
    icon: Video,
    src: '/images/Gallery/Sound Setup done by Sanjaybhai.mp4',
    isVideo: true,
  },
  {
    id: 15,
    title: 'Client Testimonial - Vihan Purohit',
    category: 'Corporate Events',
    type: 'Testimonial',
    icon: Video,
    src: '/images/Gallery/VIHAN PUROHIT TESTIMONIAL_1_1.mp4',
    isVideo: true,
  },
  {
    id: 16,
    title: 'DJ Party Setup & Lighting',
    category: 'Private Celebrations',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/Video-85_1.mp4',
    isVideo: true,
  },
  {
    id: 17,
    title: 'Christmas Carol at Taj Skyline',
    category: 'Corporate Events',
    type: 'Event Video',
    icon: Video,
    src: '/images/Gallery/christmas-carol-at-taj-skyline.mp4',
    isVideo: true,
  },
];

const VideoThumbnail = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Hover video play failed:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      muted
      playsInline
      loop
      preload="metadata"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => {
        if (prev === null) return null;
        return prev === 0 ? filteredItems.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => {
        if (prev === null) return null;
        return prev === filteredItems.length - 1 ? 0 : prev + 1;
      });
    }
  };

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
            {filteredItems.map((item, index) => {
              const TypeIcon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setActiveItemIndex(index)}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-pointer rounded-3xl overflow-hidden h-80 md:h-[340px] border border-[#2a2a2a] hover:border-[#DFB15B]/40 transition-all duration-300"
                >
                  {/* Media Content */}
                  {item.isVideo ? (
                    <VideoThumbnail src={item.src} />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent pointer-events-none" />

                  {/* Play Overlay for Videos */}
                  {item.isVideo && (
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItemIndex(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-[#DFB15B] transition-colors p-2 bg-[#1a1a1a]/85 border border-[#2a2a2a] rounded-full z-[110] cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white hover:text-[#DFB15B] transition-colors p-3 bg-[#1a1a1a]/85 border border-[#2a2a2a] rounded-full z-[110] cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white hover:text-[#DFB15B] transition-colors p-3 bg-[#1a1a1a]/85 border border-[#2a2a2a] rounded-full z-[110] cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            >
              <div className="w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#2a2a2a] bg-black">
                {activeItem.isVideo ? (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>

              {/* Title & Metadata */}
              <div className="text-center mt-6 space-y-2 px-4">
                <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">
                  {activeItem.category} &bull; {activeItem.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {activeItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
