import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: '#e3f2f9',
    100: '#c5e4f3',
    200: '#a2d4ec',
    300: '#7ac1e4',
    400: '#47a9da',
    500: '#0088cc',
    600: '#1105cb',
    700: '#0c049d',
    800: '#000040',
    900: '#00002e',
  },
  tertiary:{
    100: '#acb3b1',
    200: '#73a8ba',
    300: '#59808e',
    500: '#456a79',
    700: '#041f2d',
    800: '#071d2d',
    900: '#05131e',
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'tertiary.800',
        color: 'white', 
        minHeight: '100vh',
        fontFamily: `'Roboto', sans-serif`,
      },
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`, 
    body: `'Roboto', sans-serif`,    
  },
});

export default theme;
