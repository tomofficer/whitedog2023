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

const OurWorkFullPage = () => {
  //back btn logic
  const navigate = useNavigate();

  //gallery data
  const galleries = [
    {
      title: '21 Leonard St',
      defaultImage:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
      subGallery: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },
    {
      title: 'Halford House',
      defaultImage:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
      subGallery: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
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
              >
                Browse Full Gallery
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
      <GalleryComponent galleries={galleries} />
    </>
  );
};

export default OurWorkFullPage;
