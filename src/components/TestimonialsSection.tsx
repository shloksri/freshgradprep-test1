import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Stack,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonialsContent } from '../data/testimonialsContent';

const TestimonialsSection = () => {
  const { testimonials } = testimonialsContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const current = testimonials[activeIndex];

  return (
    <Box
      component="section"
      id="testimonials"
      aria-label="Testimonials"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {testimonialsContent.title}
        </Typography>

        <Card
          sx={{
            position: 'relative',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            '&:hover': { transform: 'none' },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
            <FormatQuoteIcon
              sx={{
                fontSize: 48,
                color: 'accent.main',
                opacity: 0.4,
                mb: 2,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                minHeight: { xs: 'auto', md: 80 },
                transition: 'opacity 0.3s ease',
              }}
            >
              &ldquo;{current.content}&rdquo;
            </Typography>

            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {current.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'accent.main', fontWeight: 500 }}>
              {current.designation}
            </Typography>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <IconButton
            onClick={goToPrev}
            aria-label="Previous testimonial"
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <Stack direction="row" spacing={1}>
            {testimonials.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveIndex(idx)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: idx === activeIndex ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
              />
            ))}
          </Stack>

          <IconButton
            onClick={goToNext}
            aria-label="Next testimonial"
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
