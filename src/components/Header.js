import React, { useRef } from 'react';
import {
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Link,
  chakra,
  Box,
  SimpleGrid,
  Stack,
  VStack,
  Button,
  CloseButton,
  Flex,
  HStack,
  Spacer,
  IconButton,
  Center,
  VisuallyHidden,
  Icon,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaSpotify,
  FaAlignJustify,
  FaHome,
  FaMusic,
  FaInfoCircle,
} from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Header = ({ albumScrollHandle, merchScrollHandle }) => {
  const bg = useColorModeValue('black', 'black');
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue('brand.600', 'brand.50');
  const hbg = useColorModeValue('gray.50', 'brand.400');
  const tcl = useColorModeValue('gray.900', 'gray.50');
  const dcl = useColorModeValue('gray.500', 'gray.50');
  const hbgh = useColorModeValue('gray.100', 'brand.500');

  const Section = props => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{
          bg: hbg,
        }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (
    <React.Fragment>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
          lg: 5,
        }}
        pos="relative"
        gap={{
          base: 6,
          sm: 8,
        }}
        px={5}
        py={6}
        p={{
          sm: 8,
        }}
      >
        <Box
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          <Section
            title="Analytics"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-w="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            }
          >
            Get a better understanding of where your traffic is coming from.
          </Section>
        </Box>

        <Box
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          <Section
            title="Engagement"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-w="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            }
          >
            Speak directly to your customers in a more meaningful way.
          </Section>
        </Box>

        <Box
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          <Section
            title="Security"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-w="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            }
          >
            Your customers&#039; data will be safe and secure.
          </Section>
        </Box>

        <Box
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          <Section
            title="Integrations"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-w="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            }
          >
            Connect with third-party tools that you&#039;re already using.
          </Section>
        </Box>

        <Box
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          <Section
            title="Automations"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-w="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            }
          >
            Build strategic funnels that will drive your customers to convert
          </Section>
        </Box>
      </SimpleGrid>
      {/* <Box
        px={{
          base: 5,
          sm: 8,
        }}
        py={5}
        bg={hbg}
        display={{
          sm: 'flex',
        }}
      >
        <Stack
          direction={{
            base: 'row',
          }}
          spacing={{
            base: 6,
            sm: 10,
          }}
        >
          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Watch Demo</chakra.span>
            </Link>
          </Box>

          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-w="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Contact Sales</chakra.span>
            </Link>
          </Box>
        </Stack>
      </Box> */}
    </React.Fragment>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
        color="red.500"
      />
      <Button w="full" variant="ghost" leftIcon={<FaHome />} color="red.500">
        Home
      </Button>
      <Button
        w="full"
        color="red.500"
        variant="ghost"
        leftIcon={<FaMusic />}
        onClick={() => albumScrollHandle()}
      >
        Music
      </Button>
      <Button
        w="full"
        variant="ghost"
        color="red.500"
        leftIcon={<FaInfoCircle />}
        onClick={() => merchScrollHandle()}
      >
        About
      </Button>
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        h="full"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <IconButton
          display={{
            base: 'flex',
            md: 'none',
          }}
          aria-label="Open menu"
          fontSize="32px"
          color="white"
          variant="ghost"
          icon={<FaAlignJustify />}
          h="32px"
          w="32px"
          onClick={mobileNav.onOpen}
          position="absolute"
        />
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/"></Link>
          <Box
            display={{
              base: 'none',
              md: 'inline-flex',
            }}
          >
            <HStack spacing={1}>
              <Box role="group">
                {/* <Button
                  bg={bg}
                  color="gray.500"
                  alignItems="center"
                  fontSize="md"
                  // _hover={{
                  //   color: cl,
                  // }}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  // rightIcon={<IoIosArrowDown />}
                >
                  Latest Albums
                </Button> */}

                <Box
                  pos="absolute"
                  left={0}
                  w="full"
                  display="none"
                  _groupHover={{
                    display: 'block',
                  }}
                >
                  {Features}
                </Box>
              </Box>

              <Link href="/" textDecor="none">
                <Button
                  bg={bg}
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    transform: 'scale(1.1)',
                    color: 'red.500',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                >
                  Home
                </Button>
              </Link>

              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                // _hover={{
                //   color: cl,
                // }}
                _hover={{
                  transform: 'scale(1.1)',
                  color: 'red.500',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                onClick={() => albumScrollHandle()}
              >
                Music
              </Button>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  transform: 'scale(1.1)',
                  color: 'red.500',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                onClick={() => merchScrollHandle()}
              >
                About
              </Button>
              {/* <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                // _hover={{
                //   color: cl,
                // }}
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                News
              </Button> */}
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            {/* MY WAY TESTING OUT THE SOCIAL H STACK, REMOVE LATER */}
            {/* <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
            <HStack spacing={6}>
              <Link
                href={
                  'https://www.instagram.com/sir.mince.a.lot/?igshid=MDM4ZDc5MmU%3D'
                }
                target="_blank"
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <SocialButton label={'Instagram'}>
                  {/* <FaInstagram size={30} color={'white'} /> */}
                  <Icon
                    as={FaInstagram}
                    h="32px"
                    w="32px"
                    color="gray.300"
                    _hover={{
                      color: 'pink.400',
                    }}
                  />
                </SocialButton>
              </Link>

              <Link
                href={'https://open.spotify.com/artist/16wnsPfzB98xYLLSJLPh3e'}
                target="_blank"
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <SocialButton label={'Spotify'}>
                  {/* <FaSpotify size={30} color={'white'} /> */}
                  <Icon
                    as={FaSpotify}
                    h="32px"
                    w="32px"
                    color="gray.300"
                    _hover={{ color: 'green.400' }}
                  />
                </SocialButton>
              </Link>

              <Link
                href={'https://www.facebook.com/haggusmincecore/'}
                target="_blank"
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <SocialButton label={'Facebook'}>
                  {/* <FaFacebook size={30} color={'white'} /> */}
                  <Icon
                    as={FaFacebook}
                    h="32px"
                    w="32px"
                    color="gray.300"
                    _hover={{ color: 'blue.500' }}
                  />
                </SocialButton>
              </Link>
            </HStack>
            {/* <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{
                base: '0',
                md: '3',
              }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            /> */}
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;
