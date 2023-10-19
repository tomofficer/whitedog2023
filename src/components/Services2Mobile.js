import { primaryFont, secondaryFont } from '../Fonts';
import { VStack, Text, Image, Box, Spacer } from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/servicesSectionBg.jpg';
import ServicesGalleryMobile from './ServicesGalleryMobile';

const Services2Mobile = () => {
  return (
    <>
      <Box className="container">
        <Box className="background-image">
          <Image src={bg} alt="about" objectFit="cover" h="100vh" />
        </Box>

        <Box className="overlayServicesMobile" color="white">
          <VStack spacing={0}>
            <Text
              fontFamily={primaryFont}
              fontSize={'4xl'} // Adjusted for mobile
              fontWeight={600}
              mb="25px"
            >
              Services
            </Text>
            <Spacer />

            <ServicesGalleryMobile />
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Services2Mobile;
