import { Box, Typography, Container, Grid, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const ItemContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
}));

export default function AboutSection() {

  const services = [
    'Udførsler',
    'Certifikater',
    'Fortoldninger',
    'Licenser',
    'Guidance i toldprocedurer',
  ];

  const expertise = [
    'Restriktionsvarer',
    'Toldoplag',
    'Forædlingsvarer',
  ];

  return (
    <AboutSectionContainer>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Uforpligtende og Konkurrencedygtige Tilbud
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body1" component="p" gutterBottom>
          Ønsker du eller din virksomhed et uforpligtende men konkurrencedygtigt tilbud på toldbehandling? KH Customs tilbyder omfattende ydelser inden for:
        </Typography>
        <Grid container spacing={2}>
          {services.map((item) => (
            <Grid item xs={12} sm={6} key={item}>
              <ItemContainer elevation={3}>
                <CheckCircleIcon color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="body1">{item}</Typography>
              </ItemContainer>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Ekspertise og Erfaring
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Med bred og mangeårig erfaring indenfor told kan KH Customs hjælpe eller guide jer gennem enhver problemstilling. Dette gælder uanset om det er sø-, luft- eller vejforsendelser. Vi håndterer også:
        </Typography>
        <Grid container spacing={2}>
          {expertise.map((item) => (
            <Grid item xs={12} sm={6} key={item}>
              <ItemContainer elevation={3}>
                <CheckCircleIcon color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="body1">{item}</Typography>
              </ItemContainer>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Toldtjek for Compliance og Optimering
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Er du usikker på, om din virksomhed overholder alle toldregler? Vi tilbyder at komme ud og foretage et grundigt "Toldtjek", hvor vi gennemgår jeres toldprocedurer for at sikre compliance og identificere områder, hvor I kan optimere og drage fordel af toldprocedurerne.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Uanset jeres behov, står KH Customs klar til at levere skræddersyede løsninger, der optimerer jeres forretning og sikrer, at I følger alle gældende regler.
        </Typography>
      </Container>
    </AboutSectionContainer>
  );
}
