import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function EnquiryForm() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    eventDate: '',
    eventType: '',
    venueLocation: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry Form Submitted:', formData);
    
    // Simulate API call
    setIsSubmitted(true);
    
    // Auto-reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobileNumber: '',
        eventDate: '',
        eventType: '',
        venueLocation: '',
        message: '',
      });
    }, 4000);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  } as const;

  return (
    <section ref={ref} id="contact" className="py-20 md:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#DFB15B]/5 rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-bold">Connect With Us</span>
              <h2 className="section-heading text-white font-black leading-tight">Get In Touch</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have questions about our setup or need a tailored package? Reach out to us directly through any of our channels below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone card */}
              <motion.a
                variants={itemVariants}
                href="tel:+917004388880"
                className="flex items-center gap-5 p-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#DFB15B]/40 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFB15B]/10 flex items-center justify-center group-hover:bg-[#DFB15B]/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#DFB15B]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Phone Call</p>
                  <p className="text-white font-bold text-lg mt-0.5">+91 70043 88880</p>
                </div>
              </motion.a>

              {/* WhatsApp card */}
              <motion.a
                variants={itemVariants}
                href="https://wa.me/917004388880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#25D366]/40 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all duration-300">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp chat</p>
                  <p className="text-white font-bold text-lg mt-0.5">+91 70043 88880</p>
                </div>
              </motion.a>

              {/* Email card */}
              <motion.a
                variants={itemVariants}
                href="mailto:info@audiohive.in"
                className="flex items-center gap-5 p-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] hover:border-[#DFB15B]/40 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFB15B]/10 flex items-center justify-center group-hover:bg-[#DFB15B]/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#DFB15B]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-white font-bold text-lg mt-0.5">info@audiohive.in</p>
                </div>
              </motion.a>

              {/* Location card */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-5 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFB15B]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#DFB15B]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Our Base</p>
                  <p className="text-white font-bold text-lg mt-0.5">Ahmedabad, Gujarat</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-12 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      {/* Event Date */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Event Date *</label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors"
                        />
                      </div>

                      {/* Event Type */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Event Type *</label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors"
                        >
                          <option value="">Select Event Type</option>
                          <option value="Weddings & Receptions">Weddings & Receptions</option>
                          <option value="Corporate Events">Corporate Events</option>
                          <option value="Live Performances">Live Performances</option>
                          <option value="Private Celebrations">Private Celebrations</option>
                          <option value="Government Events">Government Events</option>
                          <option value="Educational Events">Educational Events</option>
                          <option value="Society Events">Society Events</option>
                          <option value="Cultural Programs">Cultural Programs</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Venue Location */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Venue Location *</label>
                      <input
                        type="text"
                        name="venueLocation"
                        value={formData.venueLocation}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors"
                        placeholder="e.g. SG Road, Ahmedabad / Gandhinagar"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DFB15B] transition-colors resize-none"
                        placeholder="Describe your sound requirement or event details here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#DFB15B] hover:bg-[#C59B4C] text-white font-bold rounded-xl transition-all shadow-glow-red flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <CheckCircle className="w-20 h-20 text-[#25D366] animate-bounce" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Inquiry Submitted!</h3>
                      <p className="text-gray-300 max-w-sm">
                        Thank you for reaching out to Audiohive. Our team will review your requirements and get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
