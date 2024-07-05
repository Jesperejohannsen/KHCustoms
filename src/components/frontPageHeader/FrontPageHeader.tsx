import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from '../../assets/Transport.png';


const HeroSection = styled(Box)(({ theme }) => ({
    height: '35vh',
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



export default function FrontPageHeader() {

    return (
        <HeroSection marginTop={11}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom color={'CaptionText'}>
                    KH Customs
                </Typography>
                <Typography variant="h5" component="p" gutterBottom >
                    Din partner i told og toldregler
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Vores løsninger
                </Button>
            </Container>
        </HeroSection>
    );
}
