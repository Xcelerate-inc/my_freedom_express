import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="black"
      as="footer"
      color="white"
      py="6"
      textAlign="center"
      fontSize="lg"
      h="20"
    >
      <Text fontSize="18px" fontWeight="medium">
        2023 Team Freedom{" "}
        <Box mx="1" as="span" fontFamily="default">
          /
        </Box>
        <Text as="span" color="brand.600">
          MyFreedomExpress
        </Text>
      </Text>
    </Box>
  );
};

export default Footer;
