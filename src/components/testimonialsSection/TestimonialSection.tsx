import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import customer1 from '../../assets/Customs 1.png';
import customer2 from '../../assets/Customs 1.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ArrowButton = styled(Box)(({ theme }) => ({
  zIndex: 1,
  '&:before': {
    color: theme.palette.text.primary,
    fontSize: '30px',
  },
}));

const testimonials = [
  {
    image: customer1,
    text: 'KH Customs provided excellent service and helped us streamline our customs processes.',
    name: 'Customer 1',
  },
  {
    image: customer2,
    text: 'Their expertise in customs regulations is unparalleled.',
    name: 'Customer 2',
  },
  {
    image: customer1,
    text: 'Their expertise in customs regulations is unparalleled.',
    name: 'Customer 3',
  },
  {
    image: customer2,
    text: 'Their expertise in customs regulations is unparalleled.',
    name: 'Customer 4',
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <ArrowButton className="slick-next">→</ArrowButton>,
    prevArrow: <ArrowButton className="slick-prev">←</ArrowButton>,
  };

  return (
    <TestimonialsSectionContainer>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align='center'>
          Hvad siger vores kunder?
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <TestimonialCard>
                <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 56, height: 56, margin: 'auto' }} />
                <Typography variant="body1" component="p" gutterBottom>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" component="p">
                  - {testimonial.name}
                </Typography>
              </TestimonialCard>
            </Box>
          ))}
        </Slider>
      </Container>
    </TestimonialsSectionContainer>
  );
}
