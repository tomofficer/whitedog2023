import { useState } from 'react';
import { primaryFont, secondaryFont } from '../Fonts';
import {
  VStack,
  Text,
  Image,
  Box,
  Button,
  useBreakpointValue,
  useMediaQuery,
  HStack,
  Center,
  Icon,
  chakra,
  Heading,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import bg from '../assets/aboutUsBg.jpg';
import textLogo from '../assets/logoTextOnly.png';
import sawLogo from '../assets/sawLogo.png';
import shop1 from '../assets/shop1.jpeg';
import wdw1 from '../assets/wdw1.jpeg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const AboutUsFullPageMobile = ({ aboutUsFullRef, scrollToAboutFull }) => {
  //dynamic breakpoints
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

  const sawLogoPadding = useBreakpointValue({
    base: '80px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '350px',
  });

  const textPadding = useBreakpointValue({
    base: '50px',
    sm: '50px',
    md: '50px',
    lg: '0px',
    xl: '0px',
  });

  //custom breakpoints for big screens
  const [isLargerThan13Inches] = useMediaQuery('(min-width: 1500px)');
  const galleryPadding = isLargerThan13Inches ? '200px' : '0px';

  // State variable to track whether to show more VStacks
  const [showMore, setShowMore] = useState(false);
  const [showMoreReferences, setShowMoreReferences] = useState(false);

  // Function to toggle the "View More" button
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowMoreReferences = () => {
    setShowMoreReferences(!showMoreReferences);
  };

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
              About Us
            </Text>

            <Box>
              <Text
                fontSize={'md'}
                fontFamily={secondaryFont}
                fontWeight={900}
                textAlign="center"
              >
                We specialize in Fine Woodworking, Custom Cabinetry and
                Architectural Millwork. <br />
                {/* Located at 59 Field St in Torrington, Connecticut. <br /> */}
                {/* Family owned and operated since 2006. */}
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
                onClick={() => scrollToAboutFull()}
              >
                Learn More
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
      {/* BOTTOM SECTION ADDED AFTER FIRST DEPLOYMENT */}
      <Box mb="50px" mt="50px" mx={galleryPadding}>
        <Box ref={aboutUsFullRef}></Box>
        <HStack justifyContent="center">
          <Image src={textLogo} w={logoWidth} px={logoPadding} />
        </HStack>
        <Text fontFamily={primaryFont} fontSize={textSize} px={textPadding}>
          ARCHITECTURAL MILLWORK & CUSTOM CABINETRY
        </Text>
        <Center>
          <Image src={sawLogo} mt="30px" px={sawLogoPadding} />
        </Center>
        <Box px="50px" mt="80px">
          <Text mb="50px" fontFamily={primaryFont} fontSize="25px">
            Qualification Statement for Architectural Millwork
          </Text>

          <VStack fontFamily={secondaryFont} color="black" fontWeight="900">
            <Text pb="20px">
              White Dog Woodworking, LLC is an architectural millwork firm
              providing fabrication and installation services to general
              contractors and owners throughout New England. The company was
              founded in 2006 by Tom Officer and is owned by Tom and his son
              Andy Officer. The plant is located in a 22,000 square foot
              facility in Torrington, CT.
            </Text>
            <Center>
              <Image src={shop1} alt="shop pic" maxW="400px" pb="20px" />
            </Center>

            <Text pb="20px">
              Mr. Officer has been in the architectural millwork field for over
              40 years, as the owner of White Dog Woodworking, the owner of
              Chanler Lewis, Inc (an architectural millwork firm), the general
              manager of Paul Herbert Woodworking, Inc (a store fixture firm)
              and as an executive with Hartford Builders Finish (Ricketson
              Woodwork, an architectural millwork firm).
            </Text>
          </VStack>
          <Text fontFamily={primaryFont} fontSize={'22px'} mb="60px" mt="50px">
            Among our list of larger completed projects as of August 2023 are
            the following:
          </Text>
          <VStack
            fontFamily={secondaryFont}
            fontWeight="900"
            textAlign="center"
          >
            {showMore ? (
              <>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Alander Construction <br />
                    Great Barrington, MA
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various High End Residential Projects - average project size
                    of $200,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Allegrone Construction <br />
                    Lenox, MA
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Mostly Commerical Projects, including Assisted Living,
                    Municipal and Educational - up to $350,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    AV Tuchy Builders <br />
                    Norwalk, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various High End Commercial Projects - average project size
                    of $200,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Burlington Construction <br />
                    Torrington, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Residential and Commercial Projects, including Municipal and
                    Educational. Various sizes - up to $350,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Keiter Builders <br />
                    Florence, MA
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial and Educational Projects - up to $50,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Kronenberger & Sons <br />
                    Middletown, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial Projects, including Historical and
                    Educational - up to $150,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Newfield Construction <br />
                    Hartford, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial Projects, Including Municipal and
                    Educational - up to $250,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    The Nutmeg Companies <br />
                    New London, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Municipal and Government Projects - up to $500,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    PAC Group <br />
                    Torrington, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial Projects including Medical and
                    Educational - up to $150,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Pavarini Northeast Construction <br />
                    Stamford, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial Projects, all Office fit ups - up to
                    $650,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Pustola And Associates
                    <br />
                    Naugatuck, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various Commercial Projects including Medical - up to
                    $350,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    United Construction
                    <br />
                    Torrington, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Educational and Residential Projects - up to $550,000
                  </Text>
                </VStack>
              </>
            ) : (
              <>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Alander Construction <br />
                    Great Barrington, MA
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various High End Residential Projects - average project size
                    of $200,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Allegrone Construction <br />
                    Lenox, MA
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Mostly Commerical Projects, including Assisted Living,
                    Municipal and Educational - up to $350,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    AV Tuchy Builders <br />
                    Norwalk, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Various High End Commercial Projects - average project size
                    of $200,000
                  </Text>
                </VStack>
                <VStack mb="50px" spacing="10px">
                  <Text w="300px">
                    Burlington Construction <br />
                    Torrington, CT
                  </Text>
                  <Text w="300px" fontSize="18px">
                    Residential and Commercial Projects, including Municipal and
                    Educational. Various sizes - up to $350,000
                  </Text>
                </VStack>
              </>
            )}
            <Button
              fontFamily={primaryFont}
              fontSize="20px"
              border="none"
              color="black"
              bg="white"
              fontWeight={0}
              px={6} // Adjusted for mobile
              mt="0px"
              onClick={toggleShowMore} // Toggle visibility of remaining VStacks
            >
              {showMore ? (
                <>
                  Show Less <Icon mt="5px" ml="10px" as={FaAngleUp} />
                </>
              ) : (
                <>
                  Show More <Icon mt="5px" ml="10px" as={FaAngleDown} />
                </>
              )}
            </Button>
          </VStack>
        </Box>
        <Center mt="80px">
          <Image src={wdw1} />
        </Center>
        <Text fontFamily={primaryFont} fontSize={'20px'} mt="30px" px="0px">
          Check out our article in{' '}
          <a
            href="https://www.registercitizen.com/news/article/White-Dog-Woodworking-mixes-old-fashioned-skill-16073669.php#photo-20822874"
            target="_blank"
          >
            <chakra.span color="blue.500" mt="50px">
              <br /> The Register Citizen!
            </chakra.span>
          </a>
        </Text>
        <Heading fontFamily={primaryFont} fontSize="35px" mt="60px">
          REFERENCES
        </Heading>
        <VStack
          mt="30px"
          fontFamily={secondaryFont}
          fontWeight="900"
          textAlign="center"
        >
          {showMoreReferences ? (
            <>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Jim Culliton
                  <br />
                  Allegrone Construction
                </Text>
                <Text w="300px" fontSize="18px">
                  jwculliton@allegrone.com
                  <br />
                  (413) 281-2374
                </Text>
              </VStack>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Dave Discala
                  <br />
                  AV Tuchy Builders
                </Text>
                <Text w="300px" fontSize="18px">
                  ddiscala@avtuchybuilders.com
                  <br />
                  (203) 856-9558
                </Text>
              </VStack>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Justin Giampaolo
                  <br />
                  Burlington Construction
                </Text>
                <Text w="300px" fontSize="18px">
                  justingiampaolo@
                  <br />
                  burlingtonconstruction.com
                  <br />
                  (203) 943-8210
                </Text>
              </VStack>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Steve Bucherri
                  <br />
                  Newfield Construction
                </Text>
                <Text w="300px" fontSize="18px">
                  stevebuccheri@
                  <br />
                  newfieldconstruction.com
                  <br />
                  (860) 944-6740
                </Text>
              </VStack>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Bryan Boyce
                  <br />
                  Pavarini Northeast Construction
                </Text>
                <Text w="300px" fontSize="18px">
                  bboyce@pavarini.com
                  <br />
                  (203) 943-0636
                </Text>
              </VStack>
            </>
          ) : (
            <>
              <VStack mb="50px" spacing="0px">
                <Text w="400px">
                  Jim Culliton
                  <br />
                  Allegrone Construction
                </Text>
                <Text w="300px" fontSize="18px">
                  jwculliton@allegrone.com
                  <br />
                  (413) 281-2374
                </Text>
              </VStack>
              <VStack mb="20px" spacing="0px">
                <Text w="400px">
                  Dave Discala
                  <br />
                  AV Tuchy Builders
                </Text>
                <Text w="300px" fontSize="18px">
                  ddiscala@avtuchybuilders.com
                  <br />
                  (203) 856-9558
                </Text>
              </VStack>
            </>
          )}
        </VStack>
        <Button
          fontFamily={primaryFont}
          fontSize="20px"
          border="none"
          color="black"
          bg="white"
          fontWeight={0}
          px={6} // Adjusted for mobile
          mb="80px"
          onClick={toggleShowMoreReferences} // Toggle visibility of remaining VStacks
        >
          {showMoreReferences ? (
            <>
              Show Less <Icon mt="5px" ml="10px" as={FaAngleUp} />
            </>
          ) : (
            <>
              Show More <Icon mt="5px" ml="10px" as={FaAngleDown} />
            </>
          )}
        </Button>
        <Text fontFamily={primaryFont} fontSize={'20px'} mt="0px" px="20px">
          We also have a formal prequalification packet for the larger GC's,
          which includes our safety record, OSHA logs, financial statements and
          bonding capacity.
        </Text>
        <VStack
          mt="60px"
          textAlign="center"
          fontWeight="700"
          fontFamily={secondaryFont}
        >
          <Text>For More Information:</Text>
          <Text>tom.officer@whitedogwoodworking.com</Text>
          <Text>(860) 482-3776</Text>
        </VStack>
        <Center>
          <Image src={sawLogo} mt="60px" px="80px" />
        </Center>
      </Box>
    </>
  );
};

export default AboutUsFullPageMobile;
