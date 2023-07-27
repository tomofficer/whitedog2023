import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Testing from './components/Testing';
import Testing2 from './components/Testing2';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        {/* <Hero /> */}
        <Parallax />
        <About />
        <Gallery />
        {/* <Testing /> */}
        <Testing2 />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
