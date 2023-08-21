"use client";

import UiSpa from "./ui-spa/UiSpa";
import UiEng from "./ui-eng/UiEng";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Home() {
  // Cookies.set('lang', 'spa')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [lang, setLang] = useState('eng')

  useEffect(() => {
    const langCookie = Cookies.get('lang')
    
    console.log('langCookie', langCookie)

    if (typeof langCookie == 'undefined' || !langCookie) {
      onOpen()
    } else {
      setLang(langCookie)
    }

  }, [])

  const handleLanguageSelect = (lang) => {
    Cookies.set('lang', lang)
    setLang(lang)
    onClose()
  }

  return (
    <>
      {lang == 'spa' ? <UiSpa onOpen={onOpen} /> : <UiEng onOpen={onOpen} />}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select your language</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>

            <Flex gap={5}>

              <Button onClick={() => handleLanguageSelect('eng')} colorScheme="yellow" rounded={'none'}>English</Button>
              <Button onClick={() => handleLanguageSelect('spa')} colorScheme="yellow" rounded={'none'}>Spanish</Button>

            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
