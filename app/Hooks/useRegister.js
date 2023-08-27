import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useToast } from '@chakra-ui/react'
import Axios from '../Helpers/Axios'

export default function useRegister() {

    const toast = useToast()


    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    // const [email, setEmail] = useState()
    // const [phoneNumber, setPhoneNumber] = useState()

    const handleSubmit = async (onOpen, { firstName, lastName, email, number }) => {


        if (!firstName || !lastName || !email || !number) {
            return toast({
                title: 'All fields are required!',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

        // return console.log('Values', { firstName, lastName, email, number })
        const sponsor = Cookies.get('sponsor')

        if (!sponsor) {

            toast({
                title: 'Please verify your sponsor!',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

            return onOpen()
        }



        const res = await Axios.post('/contact', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: number,
            sponsorId: sponsor,
            contactHost: 'my_freedom'
        })

        if (res?.data?.ok) {
            Cookies.remove('sponsor')

            if (res?.data?.credentials) {
                const credentials = res?.data?.credentials
                return window.location.href = `https://shopxcelerate.com/redirected?xcelerate_id=${credentials?.xcelerate_id}&xcelerate_pass=${credentials?.xcelerate_pass}&godesana_id=${credentials?.godesana_id}&godesana_pass=${credentials?.godesana_pass}`
            } else {
                window.location.href = `https://shopxcelerate.com/`
            }

        } else {
            toast({
                title: 'Oopss!',
                description: res?.data?.msg,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

            Cookies.remove('sponsor')

            setTimeout(() => {
                window.location.href = `/`
            }, 500)

        }

    }

    return {
        handleSubmit
    }
}
