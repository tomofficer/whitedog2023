import { useRef } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery2 from './components/Gallery2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  //useRef
  const scrollToAbout = useRef();
  const scrollToGallery = useRef();
  const scrollToContact = useRef();
  const scrollToServices = useRef();

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

  const scrollToServicesHandle = () => {
    scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header
          scrollToAbout={scrollToAboutHandle}
          scrollToGallery={scrollToGalleryHandle}
          scrollToContact={scrollToContactHandle}
          scrollToServices={scrollToServicesHandle}
        />
        <Parallax />
        <About aboutRef={scrollToAbout} />
        <Gallery2 galleryRef={scrollToGallery} />
        <Services servicesRef={scrollToServices} />
        <Contact contactRef={scrollToContact} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;

//todo : IMPORTANT
//todo : update / resize font on logo in header to make it bigger
//todo : add about me section content text
//todo : add indicator on bottom of carousel
//todo : add tile grid to open carousel of all images
//todo : add title and description/location to open carousel
//todo : add cursor pointer on images
//todo : fix padding on contact section
//todo : test on different browsers
//todo : change submit btn color,
//todo : url rewrite

//todo : OPTIONAL
//todo : animate gallery thumbnails to slide in from left/right -> optional
//todo : animate gallery overlays to fade or slide in -> optional
