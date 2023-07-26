import React, { useEffect } from 'react';
import '../componentStyling/parallax.css';
import { Image, Box, Flex } from '@chakra-ui/react';

const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxLayers = document.querySelectorAll('.parallax-layer');

      parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yOffset = window.scrollY * speed;
        layer.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box px={20}>
        <div className="parallax-container">
          <div className="parallax-layer" data-speed="0.1">
            <Image
              src="https://ik.imagekit.io/v66nb6oaq/heroplaceholder_soWY5gYGs.jpg?updatedAt=1690260703745"
              alt="bck"
            />
          </div>

          <div className="parallax-layer" data-speed="0.5">
            <Flex h="100vh" alignItems="center" justifyContent="center">
              <Image
                maxW={'xl'}
                opacity={'75%'}
                src="https://ik.imagekit.io/v66nb6oaq/whitedogblack_Je04hqCmN.png?updatedAt=1661297820983"
                alt="logo"
              />
            </Flex>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Parallax;
