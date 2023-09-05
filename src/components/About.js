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
      const triggerPoint = bodyHeight - windowHeight * 7;

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
            ABOUT US
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
              We are an architectural millwork We are architectural millworkers
              manufacturing fine wood products, plastic laminate and corian for
              both residential and business jobs with general contractors. White
              Dog Woodworking is well-settled in its home at 59 Field St., and
              recently added new digital equipment that helps complete its
              large-scale projects with ease. The company has been on Field
              Street for about five years, but Officer started his own business
              much earlier. He lives in Litchfield, while his son resides in
              Morris. The company name is a tribute to the family’s love for
              Samoyeds, the white, fluffy, good-natured dogs that always appear
              to be smiling.
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
