import { useNavigate } from 'react-router-dom';

import { primaryFont, secondaryFont, tertiaryFont } from '../Fonts';
import {
  HStack,
  Text,
  Image,
  Box,
  Spacer,
  Icon,
  VStack,
  Grid,
  Button,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import bg from '../assets/ourWorkBg.jpg';
import GalleryComponent from './GalleryComponent';
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

const OurWorkFullPage = ({ fullGalleryRef, scrollToFullGallery }) => {
  //back btn logic
  const navigate = useNavigate();

  //gallery data
  const galleries = [
    {
      title: '21 Leonard St',
      defaultImage: `${leonard1}`,
      subGallery: [`${leonard1}`, `${leonard2}`, `${leonard3}`, `${leonard4}`],
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
  ];

  return (
    <>
      <Box mt={0} className="container fade-in2">
        <Box className="background-image">
          <Image src={bg} alt="about" />
        </Box>
        <Box>
          <Box className="back-button" p={4}>
            <Icon
              as={BsFillArrowLeftCircleFill}
              boxSize={12}
              color="white"
              _hover={{
                color: 'teal.400',
                transform: 'scale(0.95)',
                transition: '0.3s',
              }}
              onClick={() => {
                navigate(-1);
              }}
            />
          </Box>
        </Box>
        <Box className="overlaycareers" px={24}>
          <HStack>
            <Text
              fontFamily={primaryFont}
              fontSize={'6xl'}
              fontWeight={600}
              pr={20}
            >
              Our Work
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight={900}>
                Custom Architectural Millwork Since 2003. <br />
                Commerical, Residential, Industrial.
              </Text>
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
                onClick={() => scrollToFullGallery()}
              >
                View Full Gallery
              </Button>
            </Box>
          </HStack>
        </Box>
        <Box>
          <VStack>
            <Text>Commercial</Text>
            <Grid>
              <Image src="" alt="1" />
              <Image src="" alt="1" />
              <Image src="" alt="1" />
              <Image src="" alt="1" />
            </Grid>
          </VStack>
        </Box>
      </Box>
      <GalleryComponent galleries={galleries} fullGalleryRef={fullGalleryRef} />
    </>
  );
};

export default OurWorkFullPage;
