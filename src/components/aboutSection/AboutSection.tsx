import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default function AboutSection() {
  const theme = useTheme();

  return (
    <AboutSectionContainer>

      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Uforpligtende og Konkurrencedygtige Tilbud
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Ønsker du eller din virksomhed et uforpligtende men konkurrencedygtigt tilbud på toldbehandling? KH Customs tilbyder omfattende ydelser inden for:
        </Typography>
        <List>
          {['Udførsler', 'Certifikater', 'Fortoldninger', 'Licenser', 'Guidance i toldprocedurer'].map((item) => (
            <ListItem key={item}>
              <ListItemIcon sx={{ minWidth: 'auto', color: theme.palette.text.primary, fontSize: '0.75rem' }}>
                <CircleIcon fontSize="inherit" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2" gutterBottom>
          Ekspertise og Erfaring
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Med bred og mangeårig erfaring indenfor told kan KH Customs hjælpe eller guide jer gennem enhver problemstilling. Dette gælder uanset om det er sø-, luft- eller vejforsendelser. Vi håndterer også:
        </Typography>
        <List>
          {['Restriktionsvarer', 'Toldoplag', 'Forædlingsvarer'].map((item) => (
            <ListItem key={item}>
              <ListItemIcon sx={{ minWidth: 'auto', color: theme.palette.text.primary, fontSize: '0.75rem' }}>
                <CircleIcon fontSize="inherit" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
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
