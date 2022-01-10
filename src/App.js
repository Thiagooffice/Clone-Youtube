import {  ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home'

const useStyles = makeStyles({
  root:{
    
    
  }
})


function App() {

  const theme = createTheme({
    palette:{
      primary:{
        main: '#DC2424',
      },
      secondary: {
        main: '#337CDC',
      },
    },
  });



  return (

    <ThemeProvider theme={theme}>
      <Home/>

    </ThemeProvider>)
}

export default App;
