import React from 'react';
import { Center, Text, Box, HStack, Spacer, Image } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';

const Footer = () => {
  return (
    <>
      <Box
        pt={6}
        pb={4}
        // pos="fixed"
        // left={0}
        // bottom={0}
        // width={'100%'}
        bg="black"
        // zIndex={99999}
      >
        <Box mb={10} px={0}>
          <HStack
            color="white"
            fontFamily={secondaryFont}
            fontSize={'18px'}
            letterSpacing={'1px'}
            fontWeight={'800'}
            spacing={'10px'}
          >
            <Spacer />

            <a href="/our-work" style={{ cursor: 'pointer' }}>
              <Text _hover={{ color: 'teal.300' }}>Our Work</Text>
            </a>
            <Spacer />

            <a href="/about-us" style={{ cursor: 'pointer' }}>
              <Text _hover={{ color: 'teal.300' }}>About Us</Text>
            </a>
            <Spacer />

            <a href="/">
              <Image
                _hover={{ transform: 'scale(0.97)', transition: '0.3s' }}
                mx={10}
                src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/invertedlogoonly_f5KXcM0TX.png?updatedAt=1693109543765"
                w={{
                  base: '150px',
                  sm: '250px',
                  md: '400',
                }}
              />
            </a>

            <Spacer />
            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text _hover={{ color: 'teal.300' }}>Careers</Text>
            </a>
            <Spacer />

            <a href="/contact-us" style={{ cursor: 'pointer' }}>
              <Text _hover={{ color: 'teal.300' }}>Contact Us</Text>
            </a>
            <Spacer />
          </HStack>
        </Box>

        <Center>
          <Text
            fontFamily={secondaryFont}
            fontStyle={'italic'}
            fontWeight={'700'}
            fontSize={'md'}
            letterSpacing={'1px'}
            color="white"
          >
            &copy; Graipfrüt Web Dev 2023 • graipfrut.com@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
