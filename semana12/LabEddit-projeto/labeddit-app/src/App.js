import React from 'react';
import theme from './constants/theme';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
        <Router anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
