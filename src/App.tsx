import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import EventTypes from './components/EventTypes';
import Gallery from './components/Gallery';
import WhyAudiohive from './components/WhyAudiohive';
import Testimonials from './components/Testimonials';
import QuoteBanner from './components/QuoteBanner';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-x-hidden min-h-screen font-roboto antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <EventTypes />
      <Gallery />
      <WhyAudiohive />
      <Testimonials />
      <QuoteBanner />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
