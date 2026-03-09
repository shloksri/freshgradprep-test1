import {
  Box,
  Typography,
  Container,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { founderContent } from '../data/siteContent';

const FounderSection = () => {
  return (
    <Box
      component="section"
      id="founder"
      aria-label="About the founder"
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
          {founderContent.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Image placeholder */}
          <Box
            sx={{
              width: { xs: 200, md: 280 },
              height: { xs: 200, md: 280 },
              borderRadius: '50%',
              backgroundColor: 'background.paper',
              border: '4px solid',
              borderColor: 'accent.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', textAlign: 'center', px: 3 }}
            >
              Founder photo
            </Typography>
          </Box>

          {/* Bio content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ color: 'primary.main', mb: 0.5, fontSize: { xs: '1.5rem', md: '1.75rem' } }}
            >
              {founderContent.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'accent.main', fontWeight: 600, mb: 3 }}
            >
              {founderContent.role}
            </Typography>

            {founderContent.bio.map((paragraph, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                {paragraph}
              </Typography>
            ))}

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {founderContent.highlights.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: 'accent.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>
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

export default FounderSection;
