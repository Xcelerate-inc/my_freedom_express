import { Stack, Img, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack
      bgImage="url('/img/BG2.png')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      w="full"
      alignItems="center"
      height="859px"
    >
      <Text fontSize="3xl" color="white" pt="20" fontWeight="medium">
        13 year old
        <Text as="span" color="brand.600" mx="1">
          debt free company
        </Text>
        launches brand new global powerline system
      </Text>
      <Stack position="relative" mt="32">
        <Stack
          position="absolute"
          color="white"
          top="-20"
          p="4"
          spacing="36"
          fontSize="base"
        >
          <Text>
            Free Lead Capture pages just like the one you
            <br /> are on right now.
          </Text>
          <Text>
            Free weekly presentations to help inform <br /> and close your
            prospects
          </Text>
          <Text>
            Free Social Media graphics and posts allow <br /> you to start
            promoting your business instantly
          </Text>
        </Stack>
        <Stack
          position="absolute"
          color="white"
          top="-20"
          p="4"
          right="0"
          spacing="36"
          fontSize="base"
          textAlign="right"
        >
          <Text>
            Free email autoresponder to help automate
            <br />
            your communication with prospects
          </Text>
          <Text>
            <Box as="span" height="32px"></Box>
            Free branded PowerPoint presentation
          </Text>
          <Text>
            Free TikTok, Instagram and Facebook video <br /> ads to help drive
            sales and traffic
          </Text>
        </Stack>
        <Img src="./img/about.png" />
      </Stack>

      <Text fontSize="base" color="white" pb="20" pt="10" textAlign="center">
        Free training by multi
        <Box as="span" mx="0.5" fontFamily="default">
          -
        </Box>
        million dollar earners in the <br /> Network Marketing and Social Media
        industry
      </Text>
    </Stack>
  );
};

export default About;
