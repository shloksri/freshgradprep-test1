import {
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { impactContent } from '../data/impactContent';

const ImpactSection = () => {
  return (
    <Box
      component="section"
      id="impact"
      aria-label="Impact statistics"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'primary.main',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: '#ffffff',
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {impactContent.title}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {impactContent.stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'accent.main',
                    fontWeight: 800,
                    fontSize: { xs: '2.25rem', md: '3rem' },
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactSection;
