import { Stack, Img, Text, Box, Container, Hide } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack
      bgImage="url('/img/BG2.png')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      w="full"
      alignItems="center"
    >
      <Container maxW={'7xl'}>
        <Text
          fontSize="3xl"
          textAlign={{lg: "center"}}
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
        <Stack position="relative" mt={{base: 5, lg: 32}}>
          <Stack
            position={{ lg: "absolute" }}
            color="white"
            top={{ lg: "-20" }}
            mx={{lg:"4"}}
            spacing={{ base: '5', lg: "36" }}
            fontSize="base"
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
            position={{ lg: "absolute" }}
            color="white"
            top="-20"
            p={{ lg: "4" }}
            right="0"
            spacing={{ base: '5', lg: "36" }}
            fontSize="base"
            textAlign={{ lg: "right" }}
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
          <Hide below="lg">
            <Img src="./img/about.png" />
          </Hide>
        </Stack>

        <Text mx={{ lg: "4" }} mt={5} fontSize="base" color="white" pb="20" textAlign={{ lg: "center" }}>
          Free training by multi
          <Text as="span" mx="0.5" fontFamily="default">
            -
          </Text>
          Capacitación gratuita impartida por personas que ganan millones de{" "}
          <br />
          dólares en el sector del marketing en red y las redes sociales.
        </Text>

      </Container>
    </Stack>
  );
};

export default About;
