"use client";
import {
  Box,
  Flex,
  HStack,
  Img,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Navbar from "./Navbar";
import Hero from "./Hero";
import VideoSection from "./VideoSection";
import About from "./About";
import Footer from "./Footer";

export default function UiEng({onOpen}) {
  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <Hero />
      <VideoSection />
      <About />
      <Footer onOpen={onOpen} />
    </Box>
  );
}
