import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, tertiaryColor, quaternaryColor, neutralColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText:'white'
    },
    text: {
        primary: neutralColor
    },
    secondary: {
      main: secondaryColor,
      contrastText:'white'
    },
    tertiary: {
      main: tertiaryColor,
      contrastText:'white'
    },
    quaternary: {
      main: quaternaryColor,
      contrastText:'white'
    },
  }
});

export default theme