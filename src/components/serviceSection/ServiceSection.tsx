import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { DirectionsBoat, Flight, LocalShipping } from '@mui/icons-material';

const ServicesSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
    : `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.grey[100]})`,
  color: theme.palette.text.primary,
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.mode === 'dark'
    ? theme.palette.grey[800]
    : theme.palette.grey[200],
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
}));

export default function ServicesSection() {
  const theme = useTheme();

  const services = [
    {
      icon: <LocalShipping />,
      title: 'Trucking',
      description: 'Service 1 her.',
    },
    {
      icon: <Flight />,
      title: 'Flight(?)',
      description: 'Service 2 her.',
    },
    {
      icon: <DirectionsBoat />,
      title: 'Shipping',
      description: 'Service 3 her.',
    },
  ];

  return (
    <ServicesSectionContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align='center' gutterBottom sx={{ fontWeight: 'bold', marginBottom: theme.spacing(4) }}>
          Vi tilbyder serivce inde for
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <IconWrapper>{service.icon}</IconWrapper>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesSectionContainer>
  );
}
