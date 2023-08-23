import { useState, useEffect } from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';

const About = ({ aboutRef }) => {
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
      const triggerPoint = bodyHeight - windowHeight * 5;

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
      <div ref={aboutRef}></div>
      <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <div className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}>
          <Heading mt={20} fontFamily={primaryFont}>
            ABOUT
          </Heading>
        </div>

        <Center>
          <Box
            maxW={'2xl'}
            className={`slide-in-right ${slideInRight ? 'visible' : ''}`}
          >
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
