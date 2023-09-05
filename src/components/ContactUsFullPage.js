import { useNavigate } from 'react-router-dom';

import { primaryFont, secondaryFont, tertiaryFont } from '../Fonts';
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

const ContactUsFullPage = () => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box mt={0} className="container">
        <Box className="background-image">
          <Image
            src="https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/eric-parks-InbWYO6Bvw4-unsplash.jpg?updatedAt=1693888922728"
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
              Contact Us
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight={900}>
                Have questions? Need to contact us? Reach out anytime. <br />
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
                Get In Touch
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ContactUsFullPage;
