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
      px="4"
    >
      <Text
        fontSize="3xl"
        textAlign="center"
        color="white"
        pt="20"
        fontWeight="medium"
      >
        Una empresa sin deudas de 13
        <Text as="span" color="brand.600" mx="1">
          años lanza un nuevo
        </Text>
        sistema global de líneas de alta tensión
      </Text>
      <Stack position="relative" mt="32">
        <Stack
          position="absolute"
          color="white"
          top="-20"
          p="4"
          left="-4"
          spacing="40"
          fontSize="13px"
        >
          <Text>
            Páginas gratuitas de captación de clientes potenciales <br /> como
            en la que se encuentra ahora mismo.
          </Text>
          <Text>
            Presentaciones semanales gratuitas que le <br /> ayudarán a informar
            y cerrar sus clientes potenciales
          </Text>
          <Text>
            Gráficos y mensajes gratuitos para las redes sociales que le
            <br />
            permitirán empezar a promocionar su empresa al instante.
          </Text>
        </Stack>
        <Stack
          position="absolute"
          color="white"
          top="-20"
          p="4"
          right="-4"
          spacing="36"
          fontSize="13px"
          textAlign="right"
        >
          <Text>
            Gráficos y mensajes gratuitos para las redes sociales que le
            <br />
            permitirán empezar a promocionar su empresa al instante.
          </Text>
          <Text>
            <Text as={'span'} height="32px"></Text>
            Presentación PowerPoint de marca gratuita
          </Text>
          <Text>
            Anuncios de vídeo gratuitos en TikTok, Instagram y Facebook <br />{" "}
            para ayudar a impulsar las ventas y el tráfico.
          </Text>
        </Stack>
        <Img src="./img/about.png" />
      </Stack>

      <Text fontSize="base" color="white" pb="20" pt="10" textAlign="center">
        Free training by multi
        <Text as="span" mx="0.5" fontFamily="default">
          -
        </Text>
        Capacitación gratuita impartida por personas que ganan millones de{" "}
        <br />
        dólares en el sector del marketing en red y las redes sociales.
      </Text>
    </Stack>
  );
};

export default About;
