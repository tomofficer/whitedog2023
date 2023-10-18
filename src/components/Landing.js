import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HStack, Image, Box, Icon, Center } from '@chakra-ui/react';

import topHero from '../assets/topHero.jpg';
import sawLogo from '../assets/sawLogo.png';
import textLogo from '../assets/logoTextOnly.png';

const Landing = () => {
  return (
    <>
      <Box
        mt={0}
        position="relative"
        height="100vh"
        width="100%"
        overflow="hidden"
        className="fade-in"
        zIndex={-1}
      >
        {/* Background Image */}
        <Box
          position="fixed"
          top="0"
          left="0"
          height="100vh" // Using vh to ensure it covers the full viewport height
          width="100%"
          backgroundImage={`url(${topHero})`} // Setting the background image using CSS
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
        ></Box>

        {/* Container for the Parallax Content to achieve the sticky effect */}
        <Box
          id="parallax"
          px={{ base: '20px', sm: '100px', md: '250px' }}
          pt="20px"
          position="absolute"
          top="40%"
          left="0"
          w="100%"
          height="3in"
          backgroundColor="rgba(128, 128, 128, 0.5)"
          zIndex="2"
        >
          {/* Responsive Layout change */}
          <Box
            display={{ base: 'block', md: 'flex' }}
            justifyContent="center"
            alignItems="center" // This ensures vertical alignment
            height="100%"
          >
            <Center w="100%">
              <Image src={sawLogo} w={{ base: '150px', md: '250px' }} />
            </Center>
            <Center w="100%" pt={{ base: '20px', md: '0' }}>
              <Image
                src={textLogo}
                w={{ base: '250px', sm: '250px', md: '400px' }}
              />
            </Center>
          </Box>
        </Box>

        <Center>
          <Box
            p={4}
            position="absolute"
            top="90%"
            background="transparent"
            border="none"
            fontSize="1.5em"
            color="white"
            cursor="pointer"
            zIndex="3"
          ></Box>
        </Center>
      </Box>
    </>
  );
};

export default Landing;
