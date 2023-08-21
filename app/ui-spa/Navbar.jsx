import { Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack
      justify="space-between"
      bg="black"
      py="2"
      h="20"
      fontSize="3xl"
      px="20"
    >
      <Flex>
        <Img src="./img/nav-img.png" />
      </Flex>
      <Flex color="white" fontSize="30px" fontWeight="semibold">
        My
        <Text as="span" color="brand.500">
          Freedom
        </Text>
        Express
      </Flex>
      <Flex bg="black">
        <Img src="./img/nav-img.png" />
      </Flex>
    </HStack>
  );
};

export default Navbar;
