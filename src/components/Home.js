import { useRef } from 'react';

import Header from './Header';
import About from './About';
import Parallax from './Parallax';
import Gallery2 from './Gallery2';
import Services from './Services';
import Contact from './Contact';

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
  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToServices={scrollToServices}
      />
      <Parallax />
      <About aboutRef={aboutRef} />
      <Gallery2 galleryRef={galleryRef} />
      <Services servicesRef={servicesRef} />
      {/* <Clients servicesRef={scrollToClients} /> */}
      <Contact contactRef={contactRef} />
    </>
  );
};

export default Home;
