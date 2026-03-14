import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { eventsContent } from '../data/eventsContent';

const EventsSection = () => {
  return (
    <Box
      component="section"
      id="events"
      aria-label="Events"
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
          {eventsContent.title}
        </Typography>

        <Stack spacing={3}>
          {eventsContent.events.map((event, idx) => (
            <Card
              key={idx}
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                  }}
                >
                  {event.name}
                </Typography>

                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CalendarMonthIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {event.date}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AccessTimeIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {event.timings}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <WifiOffIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {event.mode}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <LocationOnIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {event.venue}
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'highlight.main',
                    '&:hover': {
                      backgroundColor: 'highlight.dark',
                      opacity: 0.9,
                    },
                  }}
                >
                  {event.registrationLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default EventsSection;
