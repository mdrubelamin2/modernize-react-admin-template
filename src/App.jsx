import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';
import RTL from './layouts/full/shared/customizer/RTL';
import Router from './routes/Router';
import { ThemeSettings } from './theme/Theme.jsx';

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state) => state.customizer);

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
