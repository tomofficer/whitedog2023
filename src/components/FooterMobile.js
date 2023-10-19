import React from 'react';
import { Center, Text, Box, VStack, Spacer, Image } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';
import logoTextOnlyInverted from '../assets/logoTextOnlyInverted.png';

const FooterMobile = () => {
  return (
    <>
      <Box className="fade-in2" pt={6} pb={4} bg="black">
        <Box mb={10} px={0}>
          <VStack
            color="white"
            fontFamily={secondaryFont}
            fontSize={'18px'}
            letterSpacing={'1px'}
            fontWeight={'800'}
            spacing={'10px'}
          >
            <Spacer />
            <a href="/">
              <Image
                _hover={{ transform: 'scale(0.97)', transition: '0.3s' }}
                src={logoTextOnlyInverted}
                w="300px"
              />
            </a>

            <Spacer />

            <a href="/our-work" style={{ cursor: 'pointer' }}>
              <Text
                _hover={{
                  color: 'teal.300',
                  transform: 'scale(1.05)',
                  transition: '0.3s',
                }}
              >
                Our Work
              </Text>
            </a>
            <Spacer />

            <a href="/about-us" style={{ cursor: 'pointer' }}>
              <Text
                _hover={{
                  color: 'teal.300',
                  transform: 'scale(1.05)',
                  transition: '0.3s',
                }}
              >
                About Us
              </Text>
            </a>
            <Spacer />

            <a href="/careers" style={{ cursor: 'pointer' }}>
              <Text
                _hover={{
                  color: 'teal.300',
                  transform: 'scale(1.05)',
                  transition: '0.3s',
                }}
              >
                Careers
              </Text>
            </a>
            <Spacer />

            <a href="/contact-us" style={{ cursor: 'pointer' }}>
              <Text
                _hover={{
                  color: 'teal.300',
                  transform: 'scale(1.05)',
                  transition: '0.3s',
                }}
              >
                Contact Us
              </Text>
            </a>
            <Spacer />
          </VStack>
        </Box>

        <Center>
          <Text
            fontFamily={secondaryFont}
            fontStyle={'italic'}
            fontWeight={'700'}
            fontSize={'md'}
            letterSpacing={'1px'}
            color="white"
          >
            &copy; Graipfrüt 2023 <br /> graipfrut.com@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default FooterMobile;
