import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9b00',
    },
    secondary: {
      main: '#6200d1',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;