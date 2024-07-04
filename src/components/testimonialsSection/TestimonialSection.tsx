import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import customer1 from '../../assets/Customs 1.png';
import customer2 from '../../assets/Customs 1.png';

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

export default function TestimonialsSection() {
  return (
    <TestimonialsSectionContainer>
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
    </TestimonialsSectionContainer>
  );
}
