import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function LanguageButton({ onOpen }) {

    const [lang, setLang] = useState('eng')

    useEffect(() => {

        const langCookie = Cookies.get('lang')

        if (langCookie) {
            setLang(langCookie)
        }

    }, [])

    return (
        <Button rounded={'none'} size={'sm'} onClick={() => onOpen()}>
            Language - {lang}
        </Button>
    )
}
