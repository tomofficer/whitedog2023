import React, { useEffect } from 'react';
import '../componentStyling/parallax.css';
import {
  Image,
  Box,
  Flex,
  chakra,
  shouldForwardProp,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const Parallax = () => {
  //motion animations
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

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
            <ChakraBox
              initial={{ opacity: 0 }} // Initial opacity (fully transparent)
              animate={{ opacity: 1 }} // Final opacity (fully opaque)
              transition={{ duration: 2 }} // Duration of the animation in seconds
            >
              <Image
                src="https://ik.imagekit.io/v66nb6oaq/heroplaceholder_soWY5gYGs.jpg?updatedAt=1690260703745"
                alt="bck"
              />
            </ChakraBox>
          </div>

          <div className="parallax-layer" data-speed="0.5">
            <Flex h="100vh" alignItems="center" justifyContent="center">
              <VStack>
                <ChakraBox
                  initial={{ x: -1000 }} // Initial position (off-screen to the left)
                  animate={{
                    x: 0,
                    rotate: [0, 360], // Rotate from 0 degrees to 360 degrees
                    transition: {
                      duration: 1.5, // Duration of the animation in seconds
                      ease: 'easeInOut', // Type of easing function (optional)
                    },
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <Image
                    pb={0}
                    maxW={'md'}
                    opacity={'70%'}
                    src="https://ik.imagekit.io/v66nb6oaq/whitedogblack_Je04hqCmN.png?updatedAt=1661297820983"
                    alt="logo"
                  />
                </ChakraBox>
              </VStack>
            </Flex>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Parallax;
