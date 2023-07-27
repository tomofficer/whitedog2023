import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <Heading>About</Heading>
        <Center>
          <Box maxW={'2xl'}>
            <Text textAlign={'center'} mt={{ base: 2, sm: 6, md: 6 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              iure sit voluptatibus adipisci illum, deleniti quibusdam saepe
              laudantium corrupti neque, blanditiis veniam reiciendis tempore
              fuga? Porro repudiandae natus maiores nulla eligendi sed
              consectetur assumenda magni, impedit totam sunt praesentium animi?
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default About;
