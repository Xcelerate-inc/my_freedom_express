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
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import VideoSection from "./ui/VideoSection";
import About from "./ui/About";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Footer />
    </Box>
  );
}
