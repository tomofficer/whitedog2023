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
import bg from '../assets/careersBg.jpg';

const Careers = () => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box mt={0} className="container fade-in2">
        <Box className="background-image">
          <Image src={bg} alt="careers" />
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
              Careers
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight={900}>
                Are you interested in joining our team? <br />
                Please reach out to us with your resume and contact info.
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
                Contact Us
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Careers;
