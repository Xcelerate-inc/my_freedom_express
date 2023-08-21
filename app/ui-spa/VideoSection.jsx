import { Flex, Stack, Img, Box, Text, HStack, Divider } from "@chakra-ui/react";
import React from "react";

const VideoSection = () => {
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
    <Flex w="full" h="690px" gap="20" px="4" mx="auto" justify="center">
      <Stack flex="1" color="white" maxW="541px" justify="center">
        <Img src="./img/Video.jpg" />
      </Stack>
      <Stack flex="1" justify="center" maxW="600px">
        <HStack color="brand.600">
          <Flex fontSize="lg" color="brand.600" fontWeight="semibold">
            Hacemos que ganar sea más FÁCIL
            <Text as="span" fontFamily="default">
              !
            </Text>

          </Flex>
          <Divider
            maxW="250px"
            borderWidth="1px"
            borderColor="brand.600"
            opacity="1"
          />
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
  );
};

export default VideoSection;
