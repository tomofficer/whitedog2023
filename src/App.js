import { useRef, useState, useEffect } from 'react';
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
import ContactUsFullPage from './components/ContactUsFullPage';
import OurWorkFullPage from './components/OurWorkFullpage';
import AboutUsFullPageMobile from './components/AboutUsFullPageMobile';
import CareersMobile from './components/CareersMobile';
import ContactUsFullPageMobile from './components/ContactUsFullPageMobile';
import FooterMobile from './components/FooterMobile';
import OurWorkFullPageMobile from './components/OurWorkFullPageMobile';

function App() {
  //useRef
  const scrollToAbout = useRef();
  const scrollToAboutFull = useRef();
  const scrollToGallery = useRef();
  const scrollToContact = useRef();
  const scrollToServices = useRef();
  const scrollToFullGallery = useRef();

  //scroll handlers
  const scrollToAboutHandle = () => {
    scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutFullHandle = () => {
    scrollToAboutFull.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGalleryHandle = () => {
    scrollToGallery.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFullGalleryHandle = () => {
    scrollToFullGallery.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactHandle = () => {
    scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServicesHandle = () => {
    scrollToServices.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Initialize a state variable to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add an event listener to update the windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define a breakpoint value for switching between mobile and desktop views
  const breakpoint = 1000; // Adjust this value as needed

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
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

            <Route
              path="/careers"
              element={
                windowWidth < breakpoint ? <CareersMobile /> : <Careers />
              }
            />
            <Route
              path="/about-us"
              element={
                windowWidth < breakpoint ? (
                  <AboutUsFullPageMobile
                    scrollToAboutFull={scrollToAboutFullHandle}
                    aboutUsFullRef={scrollToAboutFull}
                  />
                ) : (
                  <AboutUsFullPage
                    scrollToAboutFull={scrollToAboutFullHandle}
                    aboutUsFullRef={scrollToAboutFull}
                  />
                )
              }
            />

            <Route
              path="/contact-us"
              element={
                windowWidth < breakpoint ? (
                  <ContactUsFullPageMobile />
                ) : (
                  <ContactUsFullPage scrollToContact={scrollToContactHandle} />
                )
              }
            />

            <Route
              path="/our-work"
              element={
                windowWidth < breakpoint ? (
                  <OurWorkFullPageMobile
                    scrollToFullGallery={scrollToFullGalleryHandle}
                    fullGalleryRef={scrollToFullGallery}
                  />
                ) : (
                  <OurWorkFullPage
                    scrollToFullGallery={scrollToFullGalleryHandle}
                    fullGalleryRef={scrollToFullGallery}
                  />
                )
              }
            />
          </Routes>
          {windowWidth < breakpoint ? <FooterMobile /> : <Footer />}
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
