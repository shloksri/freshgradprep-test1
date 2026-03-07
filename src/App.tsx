import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import HomePage from './components/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
