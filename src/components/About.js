import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';

const About = ({ aboutRef }) => {
  return (
    <>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <div ref={aboutRef}></div>
        <Heading mt={20} fontFamily={primaryFont}>
          ABOUT
        </Heading>

        <Center>
          <Box maxW={'2xl'}>
            <Text
              textAlign={'center'}
              mt={{ base: 2, sm: 6, md: 6 }}
              fontFamily={secondaryFont}
              fontSize={'2xl'}
              fontWeight={900}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              iure sit voluptatibus adipisci illum, deleniti quibusdam saepe
              laudantium corrupti neque, blanditiis veniam reiciendis tempore
              fuga? Porro repudiandae natus maiores nulla eligendi sed
              consectetur assumenda magni, impedit totam sunt praesentium animi?
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </Text>
          </Box>
          {/* <Box maxW={'2xl'} mt={10}>
              <Image src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogcompanyphoto_5RsTEak0n.jpeg?updatedAt=1690680419076" />
            </Box> */}
        </Center>
      </Box>
    </>
  );
};

export default About;
