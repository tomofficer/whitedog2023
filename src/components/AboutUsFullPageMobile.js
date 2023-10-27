import { primaryFont, secondaryFont } from '../Fonts';
import {
  VStack,
  Text,
  Image,
  Box,
  Button,
  useBreakpointValue,
  useMediaQuery,
  HStack,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/aboutUsBg.jpg';
import textLogo from '../assets/logoTextOnly.png';

const AboutUsFullPageMobile = ({ aboutUsFullRef, scrollToAboutFull }) => {
  //dynamic breakpoints
  const logoWidth = useBreakpointValue({
    base: '400px',
    sm: '500px',
    md: '600px',
    lg: '700px',
    xl: 'auto',
  });
  const textSize = useBreakpointValue({
    base: '20px',
    sm: '22px',
    md: '24px',
    lg: '26px',
    xl: '30px',
  });

  const logoPadding = useBreakpointValue({
    base: '50px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '350px',
  });

  const textPadding = useBreakpointValue({
    base: '50px',
    sm: '50px',
    md: '50px',
    lg: '0px',
    xl: '0px',
  });

  //custom breakpoints for big screens
  const [isLargerThan13Inches] = useMediaQuery('(min-width: 1500px)');
  const galleryPadding = isLargerThan13Inches ? '200px' : '0px';
  return (
    <>
      <Box className="container">
        <Box className="background-image">
          <Image src={bg} alt="about" objectFit="cover" h="100vh" />
        </Box>

        <Box className="overlayAboutUsMobile" px={24} color="white">
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
                We specialize in Fine Woodworking, Custom Cabinetry and
                Architectural Millwork. <br />
                Located at 59 Field St in Torrington, Connecticut. <br />
                Family owned and operated since 2006.
              </Text>

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
                onClick={() => scrollToAboutFull()}
              >
                Learn More
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
      {/* BOTTOM SECTION ADDED AFTER FIRST DEPLOYMENT */}
      <Box mb="50px" mt="50px" mx={galleryPadding}>
        <Box ref={aboutUsFullRef}></Box>
        <HStack justifyContent="center">
          <Image src={textLogo} w={logoWidth} px={logoPadding} />
        </HStack>
        <Text fontFamily={primaryFont} fontSize={textSize} px={textPadding}>
          ARCHITECTURAL MILLWORK & CUSTOM CABINETRY
        </Text>
      </Box>
    </>
  );
};

export default AboutUsFullPageMobile;
