import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { bookingContent } from '../data/siteContent';

const BookingSection = () => {
  return (
    <Box
      component="section"
      id="booking"
      aria-label="Book a session"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#ffffff',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            {bookingContent.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mb: 5,
              maxWidth: 520,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            {bookingContent.description}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              href={bookingContent.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'accent.main',
                color: '#ffffff',
                px: 4,
                '&:hover': {
                  backgroundColor: 'accent.dark',
                  opacity: 0.9,
                },
              }}
            >
              {bookingContent.primaryCta.label}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={bookingContent.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#ffffff',
                px: 4,
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {bookingContent.secondaryCta.label}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default BookingSection;
