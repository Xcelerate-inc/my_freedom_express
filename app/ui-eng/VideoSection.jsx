import { Flex, Stack, Img, Box, Text, HStack, Divider, Container, Hide } from "@chakra-ui/react";
import React from "react";
import useRegister from '../Hooks/useRegister'


const VideoSection = ({ onOpen }) => {

  const { firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, handleSubmit } = useRegister()

  const videoText = [
    { text: "Free to join and only $ 12.95 to upgrade and start earning" },
    { text: "Global opportunity with $ 5.95 worldwide flat shipping" },
    { text: "Get paid 3% per level and on all Member orders" },
    { text: "Everyone that joins after you is automatically placed below you" },
  ];

  return (
    <Container maxW={'7xl'}>
      <Flex
        w="full"
        // h="690px"
        py={{ base: 10, lg: 32 }}
        gap="20"
        mx="auto"
        alignItems={'center'}
        justify="center"
        direction={{ base: 'column', lg: 'row' }}
      >
        {/* <Img src="/img/Video.jpg" /> */}
        <Box flex={1}>
          <iframe className="" id="video" width={'100%'} height={360} src='https://www.youtube.com/embed/bfBZ87qS2bU' allowTransparency="true" autoPlay={true} allowFullScreen muted="true" />
        </Box>

        <Stack flex="1" justify="center" maxW="600px">
          <HStack color="brand.600">
            <Flex fontSize="lg" color="brand.600" fontWeight="semibold">
              We Make Winning EASIER{" "}
              <Text as="span" fontFamily="default">
                !
              </Text>
            </Flex>
            <Hide below="lg">
              <Divider
                maxW={{ lg: "250px" }}
                borderWidth="1px"
                borderColor="brand.600"
                opacity="1"
              />
            </Hide>
          </HStack>
          <Text fontSize="3xl" color="black.500" fontWeight="medium">
            Why join the
            <Text as="span" color="brand.600" mx="1">
              FASTEST growing team
            </Text>
            in this explosive global opportunity?
          </Text>
          <Box>
            {videoText.map((about, index) => (
              <Flex
                key={index}
                alignItems="center"
                justify="flex-start"
                spacing="2.5"
                mb="3"
                gap="2"
              >
                <Img src="./img/check-circle.png" />
                <p fontSize="lg">{about.text}</p>
              </Flex>
            ))}
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default VideoSection;
