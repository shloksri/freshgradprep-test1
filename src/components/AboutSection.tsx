import {
  Box,
  Typography,
  Container,
  Stack,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { aboutContent } from '../data/aboutContent';

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      aria-label="About FreshGradPrep"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'flex-start',
          }}
        >
          {/* Main content */}
          <Box sx={{ flex: 1.2 }}>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              {aboutContent.title}
            </Typography>

            {aboutContent.paragraphs.map((paragraph, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{ color: 'text.secondary', mb: 2.5 }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          {/* Highlights card */}
          <Box
            sx={{
              flex: 0.8,
              backgroundColor: 'secondary.main',
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              alignSelf: { md: 'center' },
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}
            >
              Why FreshGradPrep
            </Typography>
            <Stack spacing={2.5}>
              {aboutContent.highlights.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleOutlineIcon
                    sx={{ color: 'accent.main', fontSize: 22, mt: 0.3, flexShrink: 0 }}
                  />
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
