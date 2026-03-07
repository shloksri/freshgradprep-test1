import { Box, Typography } from '@mui/material';
import fgpLogo from '../assets/FGP_Logo_BGremoved.png';

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="img"
        src={fgpLogo}
        alt="Fresh Grad Prep"
        sx={{
          maxWidth: { xs: 'min(85%, 280px)', sm: 'min(80%, 400px)' },
          maxHeight: { xs: '35vmin', sm: '40vmin' },
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          maxWidth: { xs: 320, sm: 480 },
          mt: 2,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: 'text.primary',
        }}
      >
        A career clarity platform designed to help individuals navigate the job
        market with strategy and clarity.
      </Typography>
    </Box>
  );
}

export default HomePage;
