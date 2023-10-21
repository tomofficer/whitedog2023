import { primaryFont, secondaryFont } from '../Fonts';
import { VStack, Text, Image, Box, Icon, Button } from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/aboutUsBg.jpg';

const AboutUsFullPageMobile = () => {
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
              <a href="https://www.registercitizen.com/news/article/White-Dog-Woodworking-mixes-old-fashioned-skill-16073669.php">
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
      </Box>
    </>
  );
};

export default AboutUsFullPageMobile;
