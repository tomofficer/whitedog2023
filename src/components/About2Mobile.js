import { primaryFont, secondaryFont } from '../Fonts';
import { VStack, Text, Image, Box, Icon, Button } from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import aboutUsBg from '../assets/aboutUsSectionBg.jpg';
import { FaCircleChevronDown } from 'react-icons/fa6';

const About2Mobile = ({ aboutRef, scrollToContact }) => {
  return (
    <>
      <Box mt={'105px'} mb="100px" className="container">
        <Box ref={aboutRef}></Box>

        <Box className="background-image">
          <Image src={aboutUsBg} alt="about" objectFit="cover" h="100vh" />
        </Box>

        <Box className="overlaycareers" px={24}>
          <VStack spacing={6}>
            <Text
              fontFamily={primaryFont}
              fontSize={'4xl'} // Adjusted for mobile
              fontWeight={600}
            >
              About Us
            </Text>

            <Box>
              <Text
                fontSize={'md'}
                fontFamily={secondaryFont}
                fontWeight={900}
                textAlign="center"
              >
                Architectural Millwork, Fine Woodworking and Custom Cabinetry.{' '}
                <br /> Commercial and Residential.
              </Text>
              <a href="/about-us">
                <Button
                  fontStyle={secondaryFont}
                  bg="none"
                  border="2px"
                  color="white"
                  fontSize={'sm'} // Adjusted for mobile
                  fontWeight={0}
                  px={6} // Adjusted for mobile
                  mt={6}
                  _hover={{
                    color: 'teal.300',
                  }}
                >
                  Learn More
                </Button>
              </a>
            </Box>
          </VStack>
        </Box>

        <Icon
          as={FaCircleChevronDown}
          boxSize="50px" // Adjusted for mobile
          color="black"
          _hover={{
            transform: 'scale(0.9)',
            transition: '0.3s',
            color: 'teal.400',
          }}
          position="relative"
          top="88%"
          zIndex={10}
          onClick={() => scrollToContact()}
          display={{ base: 'none', sm: 'inline' }}
        />
      </Box>
    </>
  );
};

export default About2Mobile;
