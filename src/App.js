import { useRef } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery2 from './components/Gallery2';
import Contact from './components/Contact';

function App() {
  //useRef
  const scrollToHome = useRef();
  const scrollToAbout = useRef();
  const scrollToGallery = useRef();
  const scrollToContact = useRef();

  //scroll handlers
  const scrollToHomeHandle = () => {
    scrollToHome.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutHandle = () => {
    scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGalleryHandle = () => {
    scrollToGallery.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactHandle = () => {
    scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header
          scrollToHome={scrollToHomeHandle}
          scrollToAbout={scrollToAboutHandle}
          scrollToGallery={scrollToGalleryHandle}
          scrollToContact={scrollToContactHandle}
        />
        <Parallax />
        <About aboutRef={scrollToAbout} />
        <Gallery2 galleryRef={scrollToGallery} />
        <Contact contactRef={scrollToContact} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
