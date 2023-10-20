import { primaryFont, secondaryFont } from '../Fonts';
import { VStack, Text, Image, Box, Icon, Button } from '@chakra-ui/react';
import GalleryComponent from './GalleryComponent';

import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/ourWorkBg.jpg';
import leonard1 from '../assets/21LeonardSt/leonard1.jpg';
import leonard2 from '../assets/21LeonardSt/leonard2.jpg';
import leonard3 from '../assets/21LeonardSt/leonard3.jpg';
import leonard4 from '../assets/21LeonardSt/leonard4.jpg';
import halford1 from '../assets/halfordHouse/halford1.png';
import halford2 from '../assets/halfordHouse/halford2.png';
import halford3 from '../assets/halfordHouse/halford4.png';
import halford4 from '../assets/halfordHouse/halford5.png';
import halford5 from '../assets/halfordHouse/halford6.png';
import halford6 from '../assets/halfordHouse/halford7.png';
import halford7 from '../assets/halfordHouse/halford8.png';
import halford8 from '../assets/halfordHouse/halford9.png';
import morris1 from '../assets/phillipMorris/morris1.jpg';
import morris2 from '../assets/phillipMorris/morris2.jpg';
import morris3 from '../assets/phillipMorris/morris3.jpg';
import morris4 from '../assets/phillipMorris/morris4.jpg';
import morris5 from '../assets/phillipMorris/morris5.jpg';
import morris6 from '../assets/phillipMorris/morris6.jpg';
import morris7 from '../assets/phillipMorris/morris7.jpg';
import tsb1 from '../assets/tsb/tsb1.jpg';
import tsb2 from '../assets/tsb/tsb2.jpg';
import tsb3 from '../assets/tsb/tsb3.jpg';
import tsb4 from '../assets/tsb/tsb4.jpg';
import tsb5 from '../assets/tsb/tsb5.jpg';
import tsb6 from '../assets/tsb/tsb6.jpg';
import tsb7 from '../assets/tsb/tsb7.jpg';
import tsb8 from '../assets/tsb/tsb8.jpg';
import tsb9 from '../assets/tsb/tsb9.jpg';
import walker1 from '../assets/walkerAuditorium/walker1.jpg';
import walker2 from '../assets/walkerAuditorium/walker2.jpg';
import walker3 from '../assets/walkerAuditorium/walker3.jpg';
import walker4 from '../assets/walkerAuditorium/walker4.jpg';
import walker5 from '../assets/walkerAuditorium/walker5.jpg';
import warner1 from '../assets/warnerTheatre/warner1.png';
import warner2 from '../assets/warnerTheatre/warner2.png';
import warner3 from '../assets/warnerTheatre/warner3.png';
import warner4 from '../assets/warnerTheatre/warner4.png';
import warner5 from '../assets/warnerTheatre/warner5.png';
import warner6 from '../assets/warnerTheatre/warner6.png';
import warner7 from '../assets/warnerTheatre/warner7.png';
import warner8 from '../assets/warnerTheatre/warner8.png';
import reception1 from '../assets/receptionDesks/reception1.JPG';
import reception2 from '../assets/receptionDesks/reception2.JPG';
import reception3 from '../assets/receptionDesks/reception3.JPG';
import reception4 from '../assets/receptionDesks/reception4.JPG';
import reception5 from '../assets/receptionDesks/reception5.JPG';
import reception6 from '../assets/receptionDesks/reception6.JPG';
import residential1 from '../assets/residentialMillwork/residential1.JPG';
import residential2 from '../assets/residentialMillwork/residential2.JPG';
import residential3 from '../assets/residentialMillwork/residential3.JPG';
import residential4 from '../assets/residentialMillwork/residential4.jpg';
import residential5 from '../assets/residentialMillwork/residential5.jpg';
import residential6 from '../assets/residentialMillwork/residential6.jpg';
import residential7 from '../assets/residentialMillwork/residential7.JPG';
import residential8 from '../assets/residentialMillwork/residential8.JPG';
import residential9 from '../assets/residentialMillwork/residential9.JPG';
import residential10 from '../assets/residentialMillwork/residential10.JPG';
import residential11 from '../assets/residentialMillwork/residential11.JPG';
import residential12 from '../assets/residentialMillwork/residential12.JPG';
import residential13 from '../assets/residentialMillwork/residential13.JPG';
import residential14 from '../assets/residentialMillwork/residential14.JPG';
import residential15 from '../assets/residentialMillwork/residential15.JPG';
import commercial1 from '../assets/commercialMillwork/commercial1.JPG';
import commercial2 from '../assets/commercialMillwork/commercial2.JPG';
import commercial3 from '../assets/commercialMillwork/commercial3.JPG';
import commercial4 from '../assets/commercialMillwork/commercial4.JPG';
import commercial5 from '../assets/commercialMillwork/commercial5.JPG';
import commercial6 from '../assets/commercialMillwork/commercial6.JPG';
import commercial7 from '../assets/commercialMillwork/commercial7.JPG';
import cabinetry1 from '../assets/customCabinetry/cabinetry1.JPG';
import cabinetry2 from '../assets/customCabinetry/cabinetry2.JPG';
import cabinetry3 from '../assets/customCabinetry/cabinetry3.JPG';
import cabinetry4 from '../assets/customCabinetry/cabinetry4.JPG';
import cabinetry5 from '../assets/customCabinetry/cabinetry5.JPG';
import cabinetry6 from '../assets/customCabinetry/cabinetry6.JPG';
import cabinetry7 from '../assets/customCabinetry/cabinetry7.JPG';
import cabinetry8 from '../assets/customCabinetry/cabinetry8.JPG';
import cabinetry9 from '../assets/customCabinetry/cabinetry9.JPG';

const OurWorkFullPageMobile = ({ fullGalleryRef, scrollToFullGallery }) => {
  //gallery data
  const galleries = [
    {
      title: 'Residential Millwork',
      defaultImage: `${residential1}`,
      subGallery: [
        `${residential1}`,
        `${residential2}`,
        `${residential3}`,
        `${residential4}`,
        `${residential5}`,
        `${residential6}`,
        `${residential7}`,
        `${residential8}`,
        `${residential9}`,
        `${residential10}`,
        `${residential11}`,
        `${residential12}`,
        `${residential13}`,
        `${residential14}`,
        `${residential15}`,
      ],
    },
    {
      title: 'Custom Cabinetry',
      defaultImage: `${cabinetry1}`,
      subGallery: [
        `${cabinetry1}`,
        `${cabinetry2}`,
        `${cabinetry3}`,
        `${cabinetry4}`,
        `${cabinetry5}`,
        `${cabinetry6}`,
        `${cabinetry7}`,
        `${cabinetry8}`,
        `${cabinetry9}`,
      ],
    },
    {
      title: 'Commercial Millwork',
      defaultImage: `${commercial1}`,
      subGallery: [
        `${commercial1}`,
        `${commercial2}`,
        `${commercial3}`,
        `${commercial4}`,
        `${commercial5}`,
        `${commercial6}`,
        `${commercial7}`,
      ],
    },
    {
      title: 'Reception Desks',
      defaultImage: `${reception1}`,
      subGallery: [
        `${reception1}`,
        `${reception2}`,
        `${reception3}`,
        `${reception4}`,
        `${reception5}`,
        `${reception6}`,
      ],
    },

    {
      title: 'Phillip Morris',
      defaultImage: `${morris1}`,
      subGallery: [
        `${morris1}`,
        `${morris2}`,
        `${morris3}`,
        `${morris4}`,
        `${morris5}`,
        `${morris6}`,
        `${morris7}`,
      ],
    },
    {
      title: 'Halford House',
      defaultImage: `${halford1}`,
      subGallery: [
        `${halford1}`,
        `${halford2}`,
        `${halford3}`,
        `${halford4}`,
        `${halford5}`,
        `${halford6}`,
        `${halford7}`,
        `${halford8}`,
      ],
    },

    {
      title: 'Torrington Savings Bank',
      defaultImage: `${tsb1}`,
      subGallery: [
        `${tsb1}`,
        `${tsb2}`,
        `${tsb3}`,
        `${tsb4}`,
        `${tsb5}`,
        `${tsb6}`,
        `${tsb7}`,
        `${tsb8}`,
        `${tsb9}`,
      ],
    },
    {
      title: 'Walker Auditorium',
      defaultImage: `${walker1}`,
      subGallery: [
        `${walker1}`,
        `${walker2}`,
        `${walker3}`,
        `${walker4}`,
        `${walker5}`,
      ],
    },
    {
      title: 'Warner Theatre',
      defaultImage: `${warner1}`,
      subGallery: [
        `${warner1}`,
        `${warner2}`,
        `${warner3}`,
        `${warner4}`,
        `${warner5}`,
        `${warner6}`,
        `${warner7}`,
        `${warner8}`,
      ],
    },

    {
      title: '21 Leonard St',
      defaultImage: `${leonard1}`,
      subGallery: [`${leonard1}`, `${leonard2}`, `${leonard3}`, `${leonard4}`],
    },
  ];
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
              Our Work
            </Text>

            <Box>
              <Text
                fontSize={'md'}
                fontFamily={secondaryFont}
                fontWeight={900}
                textAlign="center"
              >
                Fine Woodworking, Architectural Millwork <br />
                and Custom Cabinetry since 2006.
                <br />
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
                onClick={() => scrollToFullGallery()}
              >
                View Full Gallery
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
      <GalleryComponent galleries={galleries} fullGalleryRef={fullGalleryRef} />
    </>
  );
};

export default OurWorkFullPageMobile;
