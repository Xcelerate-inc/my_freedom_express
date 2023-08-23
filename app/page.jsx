"use client";

import UiSpa from "./ui-spa/UiSpa";
import UiEng from "./ui-eng/UiEng";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Input, useDisclosure, useToast } from "@chakra-ui/react";
import Axios from './Helpers/Axios'

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
  const languageModal = useDisclosure()
  const sponsorModal = useDisclosure()


  const [sponsord, setSponsed] = useState()

  const [username, setUsername] = useState(null)
  const toast = useToast()

  useEffect(() => {
    const sponsor = Cookies.get('sponsor')
    if (!sponsor) {
      sponsorModal.onOpen()
    } else {
      setSponsed(sponsor)
    }
  }, [])

  const handleVerify = async () => {
    if (!username) {
      return alert('Please enter a username')
    }

    const res = await Axios.get(`/sponsor/validate/${username}`)

    if (!res?.data?.ok) {

      return toast({
        title: 'Sponsor verification failed',
        description: "",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }
    else {
      Cookies.set('sponsor', username)
      toast({
        title: 'Sponsor verified',
        description: "",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      setTimeout(() => {
        window.location.href = `/`
      }, 500)
    }
  }



  const [lang, setLang] = useState('eng')

  useEffect(() => {
    const langCookie = Cookies.get('lang')

    if (typeof langCookie == 'undefined' || !langCookie) {
      languageModal.onOpen()
    } else {
      setLang(langCookie)
    }

  }, [])

  const handleLanguageSelect = (lang) => {
    Cookies.set('lang', lang)
    setLang(lang)
    languageModal.onClose()
  }

  return (
    <>
      {lang == 'spa' ? <UiSpa onOpen={languageModal.onOpen} sponsorModalOpen={sponsorModal.onOpen} /> : <UiEng onOpen={languageModal.onOpen} sponsorModalOpen={sponsorModal.onOpen} />}

      <Modal isOpen={languageModal.isOpen} onClose={languageModal.onClose}>
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

      <Modal isOpen={sponsorModal.isOpen} onClose={sponsorModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom={'1px'} borderColor='gray.300'>
            Who referred you?
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>

            <FormControl isRequired>
              <FormLabel>Sponsor username</FormLabel>
              <Input value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter sponsor id' />
            </FormControl>

          </ModalBody>

          <ModalFooter borderTop={'1px'} borderColor='gray.300' as={'sponsor'}>
            <Button onClick={handleVerify} colorScheme='blue'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
