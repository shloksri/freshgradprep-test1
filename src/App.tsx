import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme/theme';
import { freshgradTheme1 } from './theme/colorThemes';
import type { ColorTheme } from './theme/colorThemes';
import LandingPage from './pages/LandingPage';
import ThemePreviewWidget from './components/ThemePreviewWidget';

const enableThemePreview = true;

const App = () => {
  const [activeColors, setActiveColors] = useState<ColorTheme>(freshgradTheme1);
  const theme = useMemo(() => createAppTheme(activeColors), [activeColors]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
      {enableThemePreview && (
        <ThemePreviewWidget
          activeColors={activeColors}
          onThemeChange={setActiveColors}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
