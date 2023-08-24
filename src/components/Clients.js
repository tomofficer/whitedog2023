import { useState, useEffect } from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import ClientScroll from './ClientScroll';

const Clients = ({ clientsRef }) => {
  //slide handlers
  const [slideInLeft, setSlideInLeft] = useState(false);
  const [slideInRight, setSlideInRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Calculate the scroll position where you want the animations to trigger
      // In this example, we are triggering the animations when the user scrolls to the bottom 20% of the page
      const triggerPoint = bodyHeight - windowHeight * 4.2;

      // Update the state based on the scroll position
      setSlideInLeft(scrollY > triggerPoint);
      setSlideInRight(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div ref={clientsRef}></div>
      <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <div className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}>
          <Heading mt={20} fontFamily={primaryFont}>
            CLIENTS
          </Heading>
        </div>
      </Box>
      <Box px={32}>
        <Center>
          <ClientScroll />
        </Center>
      </Box>
    </>
  );
};

export default Clients;
