import { useRef } from 'react';

import About from './About';
import Parallax from './Parallax';
import Gallery2 from './Gallery2';
import Services from './Services';
import Contact from './Contact';

const Home = ({ aboutRef, galleryRef, servicesRef, contactRef }) => {
  return (
    <>
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
