import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
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
import ContactForm from './ContactForm';

const Careers = () => {
  //back btn logic
  const navigate = useNavigate();

  //state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                Enter your contact info below or email your resume to <br />
                andy@whitedogwoodworking.com
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
                onClick={openModal}
              >
                Contact Us
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // This gives a dim background
          },
          content: {
            color: 'lightsteelblue', // This is a placeholder styling, adjust as necessary
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <ContactForm />
      </Modal>
    </>
  );
};

export default Careers;
