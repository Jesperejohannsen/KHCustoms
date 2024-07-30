import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../../assets/TransparenTwot.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    color: theme.palette.text.primary,
    marginTop: '2rem',
}));

const FooterLogo = styled('img')({
    height: 80,
});

const FooterItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
}));

const ContactLink = styled(Link)(({ theme }) => ({
    color: 'theme.palette.text.primary',
    textDecoration: 'none',
    marginLeft: theme.spacing(1),
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const KHCustomsInformation = [
    { icon: <PhoneIcon />, text: '+45 30 74 17 29', url: 'tel:+4530741729' },
    { icon: <EmailIcon />, text: 'hellejohannsen@khcustoms.dk', url: 'mailto:hellejohannsen@khcustoms.dk' },
    { icon: <BusinessIcon />, text: 'CVR: 44129663', url: '' },
];

const QuickLinksToSKAT = [
    { text: 'Nyheder fra Toldstyrelsen', url: 'https://toldst.dk/nyheder' },
    { text: 'Nyt om tarifering', url: 'https://toldst.dk/nyheder/nyt-om-tarifering' },
    { text: 'Driftmeddelelser', url: 'https://info.skat.dk/data.aspx?oid=54315' },
];

export default function Footer() {
    return (
        <FooterContainer>
            <Container maxWidth="md">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} sm={4}>
                        <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', sm: 'flex-start' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                                Kontaktoplysninger
                            </Typography>
                            {KHCustomsInformation.map((info, index) => (
                                <FooterItem key={index}>
                                    {info.icon}
                                    <Typography variant="body1">
                                        <ContactLink href={info.url}>{info.text}</ContactLink>
                                    </Typography>
                                </FooterItem>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                        <FooterLogo src={logo} alt="KH Customs Logo" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', sm: 'flex-end' }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Nyttige links fra SKAT
                            </Typography>
                            {QuickLinksToSKAT.map((link, index) => (
                                <FooterItem key={index}>
                                    <Typography variant="body1" >
                                        <ContactLink href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.text}
                                        </ContactLink>
                                    </Typography>
                                </FooterItem>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
}
