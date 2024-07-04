import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const ContactSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

export default function ContactSection() {
  const theme = useTheme();

  return (
    <ContactSectionContainer>
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
    </ContactSectionContainer>
  );
}
