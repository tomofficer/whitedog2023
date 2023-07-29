import { useRef, useState } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery2 from './components/Gallery2';
import Contact from './components/Contact';

function App() {
  //useRef
  const scrollToAbout = useRef();
  const scrollToGallery = useRef();
  const scrollToContact = useRef();

  //scroll handlers
  const scrollToAboutHandle = () => {
    scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGalleryHandle = () => {
    scrollToGallery.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactHandle = () => {
    scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
  };

  //header state
  const [showNav, setShowNav] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header
          scrollToAbout={scrollToAboutHandle}
          scrollToGallery={scrollToGalleryHandle}
          scrollToContact={scrollToContactHandle}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <Parallax />
        <About aboutRef={scrollToAbout} />
        <Gallery2
          galleryRef={scrollToGallery}
          setShowNav={setShowNav}
          showNav={showNav}
        />
        <Contact contactRef={scrollToContact} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
