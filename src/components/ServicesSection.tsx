import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Stack,
} from '@mui/material';
import { servicesContent } from '../data/servicesContent';

const ServicesSection = () => {
  return (
    <Box
      component="section"
      id="services"
      aria-label="Services offered"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {servicesContent.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Practical, recruiter-backed services designed to give you real career clarity.
        </Typography>

        <Grid container spacing={3}>
          {servicesContent.services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {service.title}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                    <Chip
                      label={service.duration}
                      size="small"
                      sx={{
                        backgroundColor: 'accent.light',
                        color: 'accent.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {service.price}
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      href={service.ctaHref}
                      sx={{
                        backgroundColor: 'highlight.main',
                        '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
                      }}
                    >
                      {service.ctaLabel}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
