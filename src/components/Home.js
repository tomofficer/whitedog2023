import { useState, useEffect } from 'react';
import Contact from './Contact';
import Landing from './Landing';
import Header2 from './Header2';
import Services2 from './Services2';
import About2 from './About2';
import Gallery3 from './Gallery3';
import About2Mobile from './About2Mobile';
import Services2Mobile from './Services2Mobile';
import ContactMobile from './ContactMobile';

const Home = ({
  aboutRef,
  galleryRef,
  servicesRef,
  contactRef,
  scrollToAbout,
  scrollToGallery,
  scrollToContact,
  scrollToServices,
}) => {
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
    <>
      <Header2
        scrollToAbout={scrollToAbout}
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToServices={scrollToServices}
      />
      <Landing />
      <Gallery3 galleryRef={galleryRef} scrollToServices={scrollToServices} />

      {windowWidth < breakpoint ? (
        <Services2Mobile />
      ) : (
        <Services2 servicesRef={servicesRef} scrollToAbout={scrollToAbout} />
      )}

      {windowWidth < breakpoint ? (
        <About2Mobile aboutRef={aboutRef} scrollToContact={scrollToContact} />
      ) : (
        <About2 aboutRef={aboutRef} scrollToContact={scrollToContact} />
      )}

      {windowWidth < breakpoint ? (
        <ContactMobile />
      ) : (
        <Contact
          contactRef={contactRef}
          scrollToAbout={scrollToAbout}
          scrollToServices={scrollToServices}
          scrollToGallery={scrollToGallery}
        />
      )}
    </>
  );
};

export default Home;
