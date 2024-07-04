import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ServicesSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

export default function ServicesSection() {
  return (
    <ServicesSectionContainer>
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
    </ServicesSectionContainer>
  );
}
