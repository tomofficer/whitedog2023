import React from 'react';
import { Center, Text, Box, HStack, Spacer, Image } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';
import logoTextOnlyInverted from '../assets/logoTextOnlyInverted.png';

const Footer = () => {
  return (
    <>
      <Box className="fade-in2" pt={6} pb={4} bg="black">
        <Box mb={10} px={0}>
          <HStack
            color="white"
            fontFamily={secondaryFont}
            fontSize={'18px'}
            letterSpacing={'1px'}
            fontWeight={'800'}
            spacing={'10px'}
          >
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

            <a href="/">
              <Image
                _hover={{ transform: 'scale(0.97)', transition: '0.3s' }}
                mx={10}
                src={logoTextOnlyInverted}
                w={{
                  base: '150px',
                  sm: '250px',
                  md: '400',
                }}
              />
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
          </HStack>
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
            &copy; Graipfrut 2023 • graipfrut.com@gmail.com
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
