import { useNavigate } from 'react-router-dom';

import { primaryFont, secondaryFont } from '../Fonts';
import {
  HStack,
  Text,
  Image,
  Box,
  Spacer,
  Icon,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import aboutUsBg from '../assets/aboutUsSectionBg.jpg';
import { FaCircleChevronDown } from 'react-icons/fa6';

const About2 = ({ aboutRef, scrollToContact }) => {
  //media query for scroll icon
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
  return (
    <>
      <Box mt={'105px'} mb="100px" className="container">
        <Box ref={aboutRef}></Box>

        <Box className="background-image" minHeight="100vh">
          <Image src={aboutUsBg} alt="about" />
        </Box>

        <Box className="overlaycareers" px={24}>
          <HStack>
            <Text
              fontFamily={primaryFont}
              fontSize={'6xl'}
              fontWeight={600}
              pr={{ base: 0, sm: 0, md: 0 }}
            >
              About Us
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight={900}>
                Architectural Millwork, Fine Woodworking and Custom Cabinetry.{' '}
                <br /> Commercial and Residential.
              </Text>
              <a href="/about-us">
                <Button
                  fontStyle={secondaryFont}
                  bg="none"
                  border="2px"
                  color="white"
                  fontSize={'md'}
                  fontWeight={0}
                  px={10}
                  mt={6}
                  _hover={{
                    color: 'teal.300',
                  }}
                >
                  Learn More
                </Button>
              </a>
            </Box>
          </HStack>
        </Box>
        {isLargerThan1400 && (
          <Icon
            as={FaCircleChevronDown}
            boxSize="70px"
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
          />
        )}
      </Box>
    </>
  );
};

export default About2;
