import React from 'react'

import { Input, InputGroup, InputRightElement, Button, Stack,InputLeftElement } from '@chakra-ui/react'
import {PhoneIcon, CheckIcon } from '@chakra-ui/icons'

function Signup() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    
                >
                    <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    
                >
                    $
                </InputLeftElement>
                <InputRightElement >
                <CheckIcon color='green.500' />
                </InputRightElement  >
                
                <Input placeholder='Enter amount' />
                
            </InputGroup>
        </Stack>
    )
}



export default Signup;