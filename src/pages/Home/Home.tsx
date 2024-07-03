import { Box, Typography, Button, Container, Grid, Paper, Avatar, TextField, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from '../../assets/Transport.png'; 
import customer1 from '../../assets/helle.jpg'; 
import customer2 from '../../assets/helle.jpg'; 

const HeroSection = styled(Box)(({ theme }) => ({
  height: '40vh',
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Homepage() {
  const theme = useTheme();

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to KH Customs
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your trusted partner for customs solutions
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </HeroSection>

      <AboutSection>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            KH Customs is a leading provider of customs solutions, helping businesses navigate the complexities of international trade and customs regulations.
          </Typography>
        </Container>
      </AboutSection>

      <ServicesSection>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <Typography variant="h6" component="h3" gutterBottom>
                  Service 1
                </Typography>
                <Typography variant="body1" component="p">
                  Description of Service 1
                </Typography>
              </ServiceCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <Typography variant="h6" component="h3" gutterBottom>
                  Service 2
                </Typography>
                <Typography variant="body1" component="p">
                  Description of Service 2
                </Typography>
              </ServiceCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <Typography variant="h6" component="h3" gutterBottom>
                  Service 3
                </Typography>
                <Typography variant="body1" component="p">
                  Description of Service 3
                </Typography>
              </ServiceCard>
            </Grid>
          </Grid>
        </Container>
      </ServicesSection>

      <TestimonialsSection>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TestimonialCard>
                <Avatar src={customer1} alt="Customer 1" sx={{ width: 56, height: 56, margin: 'auto' }} />
                <Typography variant="body1" component="p" gutterBottom>
                  "KH Customs provided excellent service and helped us streamline our customs processes."
                </Typography>
                <Typography variant="subtitle1" component="p">
                  - Customer 1
                </Typography>
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <TestimonialCard>
                <Avatar src={customer2} alt="Customer 2" sx={{ width: 56, height: 56, margin: 'auto' }} />
                <Typography variant="body1" component="p" gutterBottom>
                  "Their expertise in customs regulations is unparalleled."
                </Typography>
                <Typography variant="subtitle1" component="p">
                  - Customer 2
                </Typography>
              </TestimonialCard>
            </Grid>
          </Grid>
        </Container>
      </TestimonialsSection>

      <ContactSection>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
              InputProps={{ style: { color: theme.palette.text.primary } }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
              InputProps={{ style: { color: theme.palette.text.primary } }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              id="message"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
              InputProps={{ style: { color: theme.palette.text.primary } }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Container>
      </ContactSection>
    </Box>
  );
}