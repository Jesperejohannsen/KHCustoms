import { Box, Typography, Container, Grid, Divider, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
    : `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.grey[100]})`,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
}));

const services = [
  { text: 'Udførsler', details: 'Detaljer om Udførsler' },
  { text: 'Certifikater', details: 'Detaljer om Certifikater' },
  { text: 'Fortoldninger', details: 'Detaljer om Fortoldninger' },
  { text: 'Licenser', details: 'Detaljer om Licenser' },
  { text: 'Guidance i toldprocedurer', details: 'Detaljer om Guidance i toldprocedurer' },
];

const expertise = [
  { text: 'Restriktionsvarer', details: 'Detaljer om Restriktionsvarer' },
  { text: 'Toldoplag', details: 'Detaljer om Toldoplag' },
  { text: 'Forædlingsvarer', details: 'Detaljer om Forædlingsvarer' },
];



export default function AboutSection() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/solutions');
  };

  return (
    <AboutSectionContainer>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Uforpligtende og Konkurrencedygtige Tilbud
        </Typography>
        <Typography variant="body1" component="p" gutterBottom marginBottom={2}>
          Ønsker du eller din virksomhed et uforpligtende men konkurrencedygtigt tilbud på toldbehandling? KH Customs tilbyder omfattende ydelser inden for:
        </Typography>
        <Grid container spacing={4}>
          {services.map((item) => (
            <Grid item xs={12} key={item.text}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${item.text}-content`}
                  id={`panel-${item.text}-header`}
                >
                  <Typography variant="body1">{item.text}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.details}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ekspertise og Erfaring
        </Typography>
        <Typography variant="body1" component="p" gutterBottom marginBottom={2}>
          Med bred og mangeårig erfaring indenfor told kan KH Customs hjælpe eller guide jer gennem enhver problemstilling. Dette gælder uanset om det er sø-, luft- eller vejforsendelser. Vi håndterer også:
        </Typography>
        <Grid container spacing={4}>
          {expertise.map((item) => (
            <Grid item xs={12} key={item.text}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${item.text}-content`}
                  id={`panel-${item.text}-header`}
                >
                  <Typography variant="body1">{item.text}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.details}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Toldtjek for Compliance og Optimering
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Er du usikker på, om din virksomhed overholder alle toldregler? Vi tilbyder at komme ud og foretage et grundigt "Toldtjek", hvor vi gennemgår jeres toldprocedurer for at sikre compliance og identificere områder, hvor I kan optimere og drage fordel af toldprocedurerne.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Uanset jeres behov, står KH Customs klar til at levere skræddersyede løsninger, der optimerer jeres forretning og sikrer, at I følger alle gældende regler.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handleButtonClick}>
          Læs mere om vores løsninger
        </Button>
      </Container>
    </AboutSectionContainer>
  );
}
