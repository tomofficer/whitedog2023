import { primaryFont, secondaryFont } from '../Fonts';
import {
  HStack,
  Text,
  Image,
  Box,
  Spacer,
  Icon,
  useMediaQuery,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import servicesSectionBg from '../assets/servicesSectionBg.jpg';
import { FaCircleChevronDown } from 'react-icons/fa6';
import ServicesGallery from './ServicesGallery';

const Services2 = ({ servicesRef, scrollToAbout }) => {
  //media query for scroll icon
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');

  return (
    <>
      <Box mt={'275px'} mb="250px" className="container">
        <Box className="background-image">
          <Box ref={servicesRef}></Box>

          <Image src={servicesSectionBg} alt="about" />
        </Box>

        <Box className="overlaycareers" px={24} pb="0px" pt="20px">
          <HStack>
            <Text
              fontFamily={primaryFont}
              fontSize={'6xl'}
              fontWeight={600}
              pr={{ base: 0, sm: 0, md: 20 }}
            >
              Services
            </Text>
            <Spacer />

            <ServicesGallery />
          </HStack>
        </Box>
        {isLargerThan1400 && (
          <Icon
            as={FaCircleChevronDown}
            boxSize="70px"
            color="gray.300"
            _hover={{
              transform: 'scale(0.9)',
              transition: '0.3s',
              color: 'teal.400',
            }}
            position="relative"
            top="88%"
            zIndex={10}
            onClick={() => scrollToAbout()}
          />
        )}
      </Box>
    </>
  );
};

export default Services2;
