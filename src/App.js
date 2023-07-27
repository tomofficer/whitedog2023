import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        {/* <Hero /> */}
        <Parallax />
        <About />
        <Gallery />

        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
