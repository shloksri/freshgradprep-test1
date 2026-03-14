import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme/theme';
import { freshgradTheme1 } from './theme/colorThemes';
import LandingPage from './pages/LandingPage';

const App = () => {
  const theme = useMemo(() => createAppTheme(freshgradTheme1), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
