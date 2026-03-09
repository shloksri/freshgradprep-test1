import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { problemContent } from '../data/siteContent';

const iconMap = [
  <MailOutlineIcon key="mail" sx={{ fontSize: 36, color: 'highlight.main' }} />,
  <HelpOutlineIcon key="help" sx={{ fontSize: 36, color: 'highlight.main' }} />,
  <VisibilityOffIcon key="vis" sx={{ fontSize: 36, color: 'highlight.main' }} />,
  <PsychologyAltIcon key="psy" sx={{ fontSize: 36, color: 'highlight.main' }} />,
];

const ProblemSection = () => {
  return (
    <Box
      component="section"
      id="problems"
      aria-label="Common problems"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'secondary.main',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {problemContent.title}
        </Typography>

        <Grid container spacing={3}>
          {problemContent.problems.map((problem, index) => (
            <Grid key={problem.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{iconMap[index]}</Box>
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {problem.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {problem.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            mt: 6,
            color: 'primary.main',
            fontWeight: 600,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {problemContent.transitionLine}
        </Typography>
      </Container>
    </Box>
  );
};

export default ProblemSection;
