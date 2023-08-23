import {
  HStack,
  Flex,
  Stack,
  Divider,
  FormControl,
  Input,
  Button,
  Box,
  Text,
  Img,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React from "react";
import useRegister from "../Hooks/useRegister";

const Hero = ({onOpen}) => {

  const {handleSubmit} = useRegister()


  return (
    <Flex
      bgImage="url('/img/hero-bg.png')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      w="full"
      h="800px"
      mr="2"
      justify="center"
      gap="20"
    >
      <Stack maxW="600px" flex="1" color="white" justify="center">
        <Text fontSize="64px" fontWeight="bold" lineHeight="80px">
          Join Our
          <HStack
            px="1"
            as="span"
            display="inline-flex"
            h="64px"
            bg="brand.500"
            ml="4"
          >
            <Text as="span">Free</Text>
          </HStack>
          <br />
          Global Powerline
        </Text>
        <Text fontSize="lg" mr="18">
          Thousands of people around the world are joining us every day. Get
          your FREE position now and take advantage of the perfect timing and
          exclusive Team Freedom digital resource kit.
        </Text>
      </Stack>

      <Flex justify="center" position="relative" alignItems="center">
        <Img
          src="./img/form-circle1.png"
          position="absolute"
          top="10"
          left="-20"
          zIndex="0"
        />
        <Img
          src="./img/form-circle.png"
          position="absolute"
          bottom={{
            base: "10",
            "2xl": "40",
          }}
          right={{
            base: "10",
            "2xl": "-16",
          }}
        />
        <Box zIndex="5" w="555px" h="594px" bg="black.500" rounded="xl" px="10">
          <Text
            fontSize="2xl"
            textAlign="center"
            color="white"
            fontWeight="semibold"
            pb="2"
            pt="8"
          >
            Create Your
            <Text as="span" color="brand.600" mx="1">
              Free Account
            </Text>
            Now
          </Text>
          <Divider
            maxW="300px"
            opacity="1"
            borderColor="brand.500"
            borderWidth="1.5px"
            mx="auto"
            mt="3"
            mb="10"
          />

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              number: "",
            }}
            onSubmit={(values) => {
              // console.log(values);
              handleSubmit(onOpen, values)
            }}
          >
            <Form>
              <Stack spacing={6} mt="4">
                <Field name="firstName">
                  {({ field }) => (
                    <FormControl>
                      <Input isRequired {...field} placeholder="First Name" />
                    </FormControl>
                  )}
                </Field>
                <Field name="lastName">
                  {({ field }) => (
                    <FormControl>
                      <Input {...field} placeholder="Last Name" />
                    </FormControl>
                  )}
                </Field>
                <Field name="number">
                  {({ field }) => (
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Phone Number"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field }) => (
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email Address"
                      />
                    </FormControl>
                  )}
                </Field>
                <Button
                  h="54px"
                  fontSize="15px"
                  colorScheme="orange"
                  bg="brand.500"
                  type="submit"
                >
                  Create My Free Account
                </Button>
              </Stack>
            </Form>
          </Formik>

          <Text color="white" py="6" fontSize="sm">
            <Text as="span" color="red.600" mr="1" fontFamily="default">
              *
            </Text>
            Everyone that upgrades AFTER you
            <Text as="span" ml="1" color="brand.600">
              gets placed below you
            </Text>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
