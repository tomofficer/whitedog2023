import React from 'react';
import { Center, Text, Box } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';

const Footer = () => {
  return (
    <>
      <Box
        py={2}
        // pos="fixed"
        // left={0}
        // bottom={0}
        // width={'100%'}
        // bg="white"
        // zIndex={99999}
      >
        <Center>
          <Text
            fontFamily={secondaryFont}
            fontStyle={'italic'}
            fontWeight={'700'}
            fontSize={'md'}
            letterSpacing={'1px'}
          >
            &copy; Tom Officer Web Dev 2023 • Tomofficerwebdev@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
