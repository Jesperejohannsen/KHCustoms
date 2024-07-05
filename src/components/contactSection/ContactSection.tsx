import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from 'emailjs-com';

const ContactSectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

export default function ContactSection() {
  const [formState, setFormState] = useState({
    from_name: '',
    email_id: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_5j9v0zl', 
        'template_wcn22s4', 
        formState,
        'IHm3l2NG7KXG_u4xI' 
      );
      if (result.status === 200) {
        setSuccessMessage('Beskeden er sendt. Vi kontakter dig snarest!');
        setFormState({ from_name: '', email_id: '', message: '' });
      } else {
        setErrorMessage('Beskeden blev ikke sendt. Prøv igen.');
      }
    } catch (error) {
      setErrorMessage('Beskeden blev ikke sendt. Prøv igen.');
    }
  };

  return (
    <ContactSectionContainer>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          Kontaktformular.
        </Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="from_name"
            label="Navn"
            name="from_name"
            autoComplete="name"
            value={formState.from_name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'inherit' } }}
            InputProps={{ style: { color: 'inherit' } }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email_id"
            label="Email Adresse"
            name="email_id"
            autoComplete="email"
            value={formState.email_id}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'inherit' } }}
            InputProps={{ style: { color: 'inherit' } }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="message"
            label="Besked"
            id="message"
            multiline
            rows={4}
            value={formState.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'inherit' } }}
            InputProps={{ style: { color: 'inherit' } }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Send besked
          </Button>
        </form>
      </Container>
    </ContactSectionContainer>
  );
}
