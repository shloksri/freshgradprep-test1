import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { contactContent } from '../data/siteContent';

const ContactSection = () => {
  return (
    <Box
      component="section"
      id="contact"
      aria-label="Contact"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'secondary.main',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {contactContent.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 480,
            mx: 'auto',
          }}
        >
          {contactContent.description}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ height: '100%', textAlign: 'center', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 3 }}>
                <DescriptionIcon sx={{ fontSize: 36, color: 'primary.main', mb: 1.5 }} />
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1.5 }}>
                  Enquiry Form
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href={contactContent.googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                >
                  {contactContent.googleFormLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ height: '100%', textAlign: 'center', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 3 }}>
                <WhatsAppIcon sx={{ fontSize: 36, color: '#25D366', mb: 1.5 }} />
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  WhatsApp
                </Typography>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {contactContent.whatsappNumber}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    href={contactContent.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderColor: '#25D366', color: '#25D366' }}
                  >
                    Chat Now
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ height: '100%', textAlign: 'center', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 3 }}>
                <EmailIcon sx={{ fontSize: 36, color: 'primary.main', mb: 1.5 }} />
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Email
                </Typography>
                <Typography
                  variant="body2"
                  component="a"
                  href={`mailto:${contactContent.email}`}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    textDecoration: 'underline',
                  }}
                >
                  {contactContent.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
