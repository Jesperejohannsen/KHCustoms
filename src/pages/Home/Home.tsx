import { Box, useTheme } from '@mui/material';
import FrontPageHeader from '../../components/frontPageHeader/FrontPageHeader';
import AboutKHCustomSection from '../../components/aboutSection/AboutSection'
import ServicesSection from '../../components/serviceSection/ServiceSection';
import TestimonialsSection from '../../components/testimonialsSection/TestimonialSection';
import ContactSection from '../../components/contactSection/ContactSection';

export default function Homepage() {
  const theme = useTheme();

  return (
    <Box>
      <FrontPageHeader />
      <AboutKHCustomSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </Box>
  );
}