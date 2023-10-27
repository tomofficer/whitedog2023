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
  useBreakpointValue,
  VStack,
  Center,
  Heading,
  chakra,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import textLogo from '../assets/logoTextOnly.png';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import bg from '../assets/aboutUsBg.jpg';
import shop1 from '../assets/shop1.jpeg';
import wdw1 from '../assets/wdw1.jpeg';
import sawLogo from '../assets/sawLogo.png';

const AboutUsFullPage = ({ aboutUsFullRef, scrollToAboutFull }) => {
  //back btn logic
  const navigate = useNavigate();

  //dynamic padding
  const textPadding = useBreakpointValue({
    base: '50px',
    sm: '50px',
    md: '50px',
    lg: '0px',
    xl: '0px',
  });

  const logoWidth = useBreakpointValue({
    base: '400px',
    sm: '500px',
    md: '600px',
    lg: '700px',
    xl: 'auto',
  });
  const textSize = useBreakpointValue({
    base: '20px',
    sm: '22px',
    md: '24px',
    lg: '26px',
    xl: '30px',
  });

  const logoPadding = useBreakpointValue({
    base: '50px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '350px',
  });

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
              color="gray.300"
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
              pr={{ base: 0, sm: 0, md: 0 }}
            >
              About Us
            </Text>
            <Spacer />
            <Box px={40}>
              <Text fontSize={'lg'} fontFamily={secondaryFont} fontWeight="900">
                Fine Woodworking, Custom Cabinetry and Architectural Millwork.{' '}
                <br />
                Located at 59 Field St in Torrington, Connecticut. <br />
                {/* Family owned and operated since 2006. */}
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
                onClick={() => scrollToAboutFull()}
              >
                Read More
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
      {/* BOTTOM SECTION ADDED AFTER FIRST DEPLOYMENT */}
      <Box ref={aboutUsFullRef}></Box>
      <Box mb="100px">
        <HStack justifyContent="center">
          <Image src={textLogo} w={logoWidth} px={logoPadding} />
        </HStack>
        <VStack>
          <Text fontFamily={primaryFont} fontSize={textSize} px={textPadding}>
            ARCHITECTURAL MILLWORK & CUSTOM CABINETRY
          </Text>
          <Image src={sawLogo} maxW="300px" mt="30px" />
        </VStack>

        <Box px="100px" mt="80px">
          <Text mb="80px" fontFamily={primaryFont} fontSize="25px">
            Qualification Statement for Architectural Millwork
          </Text>
          <HStack>
            <VStack
              fontFamily={secondaryFont}
              color="black"
              fontWeight="900"
              mr="50px"
            >
              <Text pb="20px">
                White Dog Woodworking, LLC is an architectural millwork firm
                providing fabrication and installation services to general
                contractors and owners throughout New England. The company was
                founded in 2006 by Tom Officer and is owned by Tom and his son
                Andy Officer. The plant is located in a 22,000 square foot
                facility in Torrington, CT.
              </Text>
              <Text pb="20px">
                Mr. Officer has been in the architectural millwork field for
                over 40 years, as the owner of White Dog Woodworking, the owner
                of Chanler Lewis, Inc (an architectural millwork firm), the
                general manager of Paul Herbert Woodworking, Inc (a store
                fixture firm) and as an executive with Hartford Builders Finish
                (Ricketson Woodwork, an architectural millwork firm).
              </Text>
            </VStack>
            <Image src={shop1} alt="shop pic" maxW="600px" />
          </HStack>

          <Box mt="120px">
            <Text fontFamily={primaryFont} fontSize={'22px'} mb="60px">
              Among our list of larger completed projects as of August 2023 are
              the following:
            </Text>
            <VStack
              fontFamily={secondaryFont}
              fontWeight="900"
              textAlign="center"
            >
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Alander Construction <br />
                  Great Barrington, MA
                </Text>
                <Text w="300px">
                  Various High End Residential Projects - average project size
                  of $200,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Allegrone Construction <br />
                  Lenox, MA
                </Text>
                <Text w="300px">
                  Mostly Commerical Projects, including Assisted Living,
                  Municipal and Educational - up to $350,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  AV Tuchy Builders <br />
                  Norwalk, CT
                </Text>
                <Text w="300px">
                  Various High End Commercial Projects - average project size of
                  $200,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Burlington Construction <br />
                  Torrington, CT
                </Text>
                <Text w="300px">
                  Residential and Commercial Projects, including Municipal and
                  Educational. Various sizes - up to $350,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Keiter Builders <br />
                  Florence, MA
                </Text>
                <Text w="300px">
                  Various Commercial and Educational Projects - up to $50,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Kronenberger & Sons <br />
                  Middletown, CT
                </Text>
                <Text w="300px">
                  Various Commercial Projects, including Historical and
                  Educational - up to $150,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Newfield Construction <br />
                  Hartford, CT
                </Text>
                <Text w="300px">
                  Various Commercial Projects, Including Municipal and
                  Educational - up to $250,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  The Nutmeg Companies <br />
                  New London, CT
                </Text>
                <Text w="300px">
                  Various Municipal and Government Projects - up to $500,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  PAC Group <br />
                  Torrington, CT
                </Text>
                <Text w="300px">
                  Various Commercial Projects including Medical and Educational
                  - up to $150,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Pavarini Northeast Construction <br />
                  Stamford, CT
                </Text>
                <Text w="300px">
                  Various Commercial Projects, all Office fit ups - up to
                  $650,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  Pustola And Associates
                  <br />
                  Naugatuck, CT
                </Text>
                <Text w="300px">
                  Various Commercial Projects including Medical - up to $350,000
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="300px">
                  United Construction
                  <br />
                  Torrington, CT
                </Text>
                <Text w="300px">
                  Educational and Residential Projects - up to $550,000
                </Text>
              </HStack>
            </VStack>
            <Center px="250px" mt="80px">
              <Image src={wdw1} />
            </Center>

            <Text
              fontFamily={primaryFont}
              fontSize={'20px'}
              mt="50px"
              px="200px"
            >
              Check out our article in{' '}
              <a
                href="https://www.registercitizen.com/news/article/White-Dog-Woodworking-mixes-old-fashioned-skill-16073669.php#photo-20822874"
                target="_blank"
              >
                <chakra.span color="blue.500" mt="50px">
                  The Register Citizen!
                </chakra.span>
              </a>
            </Text>

            <Heading fontFamily={primaryFont} fontSize="35px" mt="120px">
              REFERENCES
            </Heading>
            <VStack
              mt="50px"
              fontFamily={secondaryFont}
              fontWeight="900"
              textAlign="center"
            >
              <HStack mb="50px" spacing="60px">
                <Text w="400px">
                  Jim Culliton
                  <br />
                  jwculliton@allegrone.com
                </Text>
                <Text w="300px">
                  Allegrone Construction
                  <br />
                  (413) 281-2374
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="400px">
                  Dave Discala
                  <br />
                  ddiscala@avtuchybuilders.com
                </Text>
                <Text w="300px">
                  AV Tuchy Builders
                  <br />
                  (203) 856-9558
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="400px">
                  Justin Giampaolo
                  <br />
                  justingiampaolo@burlingtonconstruction.com
                </Text>
                <Text w="300px">
                  Burlington Construction
                  <br />
                  (203) 943-8210
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="400px">
                  Steve Bucherri
                  <br />
                  stevebuccheri@newfieldconstruction.com
                </Text>
                <Text w="300px">
                  Newfield Construction
                  <br />
                  (860) 944-6740
                </Text>
              </HStack>
              <HStack mb="50px" spacing="80px">
                <Text w="400px">
                  Bryan Boyce
                  <br />
                  bboyce@pavarini.com
                </Text>
                <Text w="300px">
                  Pavarini Northeast Construction
                  <br />
                  (203) 943-0636
                </Text>
              </HStack>
              <Text
                fontFamily={primaryFont}
                fontSize={'20px'}
                mt="50px"
                px="200px"
              >
                We also have a formal prequalification packet for the larger
                GC's, which includes our safety record, OSHA logs, financial
                statements and bonding capacity.
              </Text>

              <VStack mt="60px" textAlign="center" fontWeight="700">
                <Text>For More Information:</Text>
                <Text>tom.officer@whitedogwoodworking.com</Text>
                <Text>(860) 482-3776</Text>
              </VStack>

              <Image src={sawLogo} maxW="300px" mt="60px" />
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsFullPage;
