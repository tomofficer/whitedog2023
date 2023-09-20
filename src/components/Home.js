import { useRef } from 'react';

import Header from './Header';
import About from './About';
import Parallax from './Parallax';
import Gallery2 from './Gallery2';
import Services from './Services';
import Contact from './Contact';
import Hero from './Hero';
import Parallax3 from './Parallax3';

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
      <Gallery2 galleryRef={galleryRef} />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Parallax3 />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default Home;
