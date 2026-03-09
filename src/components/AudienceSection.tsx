import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { audienceContent } from '../data/audienceContent';
import type { SvgIconComponent } from '@mui/icons-material';

const iconMap: SvgIconComponent[] = [
  SchoolIcon,
  WorkOutlineIcon,
  TrendingUpIcon,
  SwapHorizIcon,
  SearchIcon,
];

const AudienceSection = () => {
  return (
    <Box
      component="section"
      id="audience"
      aria-label="Who FreshGradPrep is for"
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
          {audienceContent.title}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {audienceContent.cards.map((card, index) => {
            const IconComponent = iconMap[index];
            return (
              <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.paper',
                    textAlign: 'center',
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: 'accent.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2.5,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: 'accent.main' }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AudienceSection;
