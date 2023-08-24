import { Flex, Stack, Img, Box, Text, HStack, Divider, Container, Hide } from "@chakra-ui/react";
import React from "react";
import useRegister from '../Hooks/useRegister'

const VideoSection = ({ onOpen }) => {


  const videoText = [
    {
      text: "Inscripción gratuita y sólo $12.95 para actualizar y empezar a ganar",
    },
    {
      text: "Oportunidad global con $5.95 de gastos de envío en todo el mundo",
    },
    { text: "Gane un 3% por nivel y en todos los pedidos de los miembros" },
    {
      text: "Todos los que se afilien después de usted quedarán automáticamente después de usted",
    },
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
        <Box flex={1}>
          <iframe className="" id="video" width={'100%'} height={360} src='https://www.youtube.com/embed/aVg7lFdfQ2A' allowTransparency="true" autoPlay={true} allowFullScreen muted="true" />
        </Box>

        <Stack flex="1" justify="center" maxW="600px">
          <HStack color="brand.600">
            <Flex fontSize="lg" color="brand.600" fontWeight="semibold">
              Hacemos que ganar sea más FÁCIL
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
            Por qué unirse al equipo de más
            <Text as="span" color="brand.600" mx="1">
              rápido crecimiento
            </Text>
            en esta explosiva oportunidad global?
          </Text>
          <Box>
            {videoText.map((about, index) => (
              <Flex
                key={index}
                alignItems="start"
                justify="flex-start"
                spacing="2.5"
                mb="3"
                gap="2"
              >
                <Img mt="1" src="./img/check-circle.png" />
                <Text fontSize="lg">{about.text}</Text>
              </Flex>
            ))}
          </Box>
        </Stack>
      </Flex>

    </Container>
  );
};

export default VideoSection;
