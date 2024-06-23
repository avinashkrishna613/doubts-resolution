import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { UserProvider } from './components/context/UserContext';
import HomePage from './pages/Homepage';


const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <HomePage />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
