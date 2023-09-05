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
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const AboutUsFullPage = () => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box mt={0} className="container">
        <Box className="background-image">
          <Image
            src="https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/matt-antonioli-uvMSarsRHzo-unsplash.jpg?updatedAt=1693887693054"
            alt="about"
          />
        </Box>
        <Box>
          <Box className="back-button" p={4}>
            <a href="/">
              <Icon
                as={BsFillArrowLeftCircleFill}
                boxSize={12}
                color="white"
                // onClick={() => {
                //   navigate(-1);
                // }}
              />
            </a>
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
              About Us
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight={900}>
                Family owned and operated since 2008. <br />
                We specialize in Fine Woodworking, Custom Cabinetry and
                Architectural Millwork. <br />
                We are located at 23 Field St in Torrington, Connecticut.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsFullPage;
