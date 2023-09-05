import { useRef } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Parallax from './components/Parallax';
import About from './components/About';
import Gallery2 from './components/Gallery2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Clients from './components/Clients';
import Parallax2 from './components/Parallax2';
import Careers from './components/Careers';
import Home from './components/Home';
import AboutUsFullPage from './components/AboutUsFullPage';

function App() {
  //useRef
  const scrollToAbout = useRef();
  const scrollToGallery = useRef();
  const scrollToContact = useRef();
  const scrollToServices = useRef();
  const scrollToClients = useRef();

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

  const scrollToClientsHandle = () => {
    scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          {/* <Header
            scrollToAbout={scrollToAboutHandle}
            scrollToGallery={scrollToGalleryHandle}
            scrollToContact={scrollToContactHandle}
            scrollToServices={scrollToServicesHandle}
            scrollToClients={scrollToClientsHandle}
          /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  scrollToAbout={scrollToAboutHandle}
                  scrollToGallery={scrollToGalleryHandle}
                  scrollToContact={scrollToContactHandle}
                  scrollToServices={scrollToServicesHandle}
                  aboutRef={scrollToAbout}
                  galleryRef={scrollToGallery}
                  servicesRef={scrollToServices}
                  contactRef={scrollToContact}
                />
              }
            />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about-us" element={<AboutUsFullPage />} />
          </Routes>
          {/* <Parallax />
          <About aboutRef={scrollToAbout} />
          <Gallery2 galleryRef={scrollToGallery} />
          <Services servicesRef={scrollToServices} />
          <Clients servicesRef={scrollToClients} />
          <Contact contactRef={scrollToContact} /> */}
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

//todo : IMPORTANT
//todo : add careers section to a new page?
//todo : update footer with all navigation points
//todo : update / resize font on logo in header to make it bigger
//todo : add about me section content text
//todo : add services section content text
//todo : add indicator on bottom of carousel
//todo : add tile grid to open carousel of all images
//todo : add title and description/location to open carousel
//todo : test on different browsers
//todo : animate gallery thumbnails to slide in from left/right as you scroll down the page

//todo : OPTIONAL
//todo : possible url rewrite when clicking to different sections?
//todo : let the header appear whenever you scroll back up (when its not showing)
