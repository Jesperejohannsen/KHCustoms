import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SolutionsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(8, 4),
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(135deg, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
    : `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.grey[100]})`,
  color: theme.palette.text.primary,
}));

const SolutionCard = styled(Paper)(({ theme }) => ({
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

const solutions = [
  {
    title: 'Custom Documents',
    description: 'We assist with the preparation and processing of all necessary customs documents to ensure smooth transit.',
  },
  {
    title: 'Export/Import of Cargo',
    description: 'We manage the export and import of cargo from all over the globe, ensuring compliance with international regulations.',
  },
  {
    title: 'Custom Rules',
    description: 'Our experts provide guidance on custom rules and regulations to help you avoid any legal complications.',
  },
  {
    title: 'Certificates',
    description: 'We help you obtain the necessary certificates required for international trade and compliance.',
  },
];

export default function SolutionsPage() {
  return (
    <SolutionsContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Vores løsninger
        </Typography>
        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SolutionCard>
                <Typography variant="h6" component="h3" gutterBottom>
                  {solution.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {solution.description}
                </Typography>
              </SolutionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SolutionsContainer>
  );
}
