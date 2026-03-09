import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import SampleComponent from '../components/SampleComponent';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import AboutSection from '../components/AboutSection';
import AudienceSection from '../components/AudienceSection';
import ImpactSection from '../components/ImpactSection';
import ServicesSection from '../components/ServicesSection';
import FounderSection from '../components/FounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <SampleComponent />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <AudienceSection />
      <ImpactSection />
      <ServicesSection />
      <FounderSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
