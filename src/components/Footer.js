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
            fontSize={'md'}
            letterSpacing={'1px'}
            fontWeight={'700'}
            spacing={'10px'}
          >
            <Spacer />

            <a href="/" style={{ cursor: 'pointer' }}>
              <Text>Our Work</Text>
            </a>
            <Spacer />

            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>About Us</Text>
            </a>
            <Spacer />

            <Image
              mx={10}
              src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/invertedlogoonly_f5KXcM0TX.png?updatedAt=1693109543765"
              w={{
                base: '150px',
                sm: '250px',
                md: '400',
              }}
            />

            <Spacer />

            <a href="/" style={{ cursor: 'pointer' }}>
              <Text>Services</Text>
            </a>
            <Spacer />

            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text>Careers</Text>
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
            &copy; Tom Officer Web Dev 2023 • Tomofficerwebdev@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
