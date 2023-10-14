import { useRef } from 'react';

import Header from './Header';
import About from './About';
import Parallax from './Parallax';
import Gallery2 from './Gallery2';
import Services from './Services';
import Contact from './Contact';
import Hero from './Hero';
import Parallax3 from './Parallax3';
import Landing from './Landing';
import Header2 from './Header2';
import Services2 from './Services2';

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
      {/* <Header
        scrollToAbout={scrollToAbout}
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToServices={scrollToServices}
      />
      <Parallax /> */}
      <Header2 />
      <Landing />
      <Gallery2 galleryRef={galleryRef} />
      <About aboutRef={aboutRef} />
      {/* <Services servicesRef={servicesRef} /> */}
      <Services2 />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default Home;
