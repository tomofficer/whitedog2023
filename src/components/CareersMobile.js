import { primaryFont, secondaryFont } from '../Fonts';
import { VStack, Text, Image, Box } from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/aboutUsBg.jpg';

const CareersMobile = () => {
  return (
    <>
      <Box className="container">
        <Box className="background-image">
          <Image src={bg} alt="about" objectFit="cover" h="100vh" />
        </Box>

        <Box className="overlayCareersMobile" px={24} color="white">
          <VStack spacing={6}>
            <Text
              fontFamily={primaryFont}
              fontSize={'4xl'} // Adjusted for mobile
              fontWeight={600}
            >
              Careers
            </Text>

            <Box>
              <Text
                fontSize={'md'}
                fontFamily={secondaryFont}
                fontWeight={900}
                textAlign="center"
              >
                Are you interested in joining our team? <br />
                Email your resume to <br />
                andy.officer@whitedogwoodworking.com <br />
                Or give us a call at : <br />
                1-860-482-3776
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default CareersMobile;
