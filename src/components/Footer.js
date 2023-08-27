import React from 'react';
import { Center, Text, Box, HStack } from '@chakra-ui/react';
import { secondaryFont, primaryFont } from '../Fonts';

const Footer = () => {
  return (
    <>
      <Box
        pt={10}
        // pos="fixed"
        // left={0}
        // bottom={0}
        // width={'100%'}
        bg="black"
        // zIndex={99999}
      >
        <Box pl={'5%'} mb={10}>
          <HStack
            color="white"
            fontFamily={secondaryFont}
            fontSize={'md'}
            letterSpacing={'1px'}
            fontWeight={'700'}
            spacing={'20px'}
          >
            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>Our Work</Text>
            </a>
            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>About Us</Text>
            </a>

            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>Services</Text>
            </a>
            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>Careers</Text>
            </a>
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
            &copy; Tom Officer Web Dev 2023 • Tomofficerwebdev@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
