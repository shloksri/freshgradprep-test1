import {
  Box,
  Typography,
  Container,
  Stack,
} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { solutionContent } from '../data/solutionContent';

const SolutionSection = () => {
  return (
    <Box
      component="section"
      aria-label="What problem it solves"
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
          <Box sx={{ flex: 1.2 }}>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              {solutionContent.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              {solutionContent.introParagraph}
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {solutionContent.painPoints.map((point) => (
                <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <RemoveCircleOutlineIcon
                    sx={{ color: 'highlight.main', fontSize: 22, mt: 0.3, flexShrink: 0 }}
                  />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography
              variant="subtitle1"
              sx={{ color: 'primary.main', fontWeight: 700 }}
            >
              {solutionContent.gapStatement}
            </Typography>
          </Box>

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
              {solutionContent.bridgeIntro}
            </Typography>

            <Stack spacing={2}>
              {solutionContent.bridgePoints.map((point) => (
                <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleOutlineIcon
                    sx={{ color: 'accent.main', fontSize: 22, mt: 0.3, flexShrink: 0 }}
                  />
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Stack spacing={0.5} sx={{ mt: 4 }}>
              {solutionContent.closingLines.map((line) => (
                <Typography
                  key={line}
                  variant="subtitle2"
                  sx={{ color: 'accent.main', fontWeight: 700 }}
                >
                  {line}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionSection;
