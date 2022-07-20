import {
    Box,
    Flex,
    Input,
    Form,
    InputLeftElement,
    Button,
    Link

}
    from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    Heading,
    Avatar
} from '@chakra-ui/react'

import { EmailIcon, LockIcon } from '@chakra-ui/icons'

// 
function Login() {


    return (

        <>
            <Flex flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center">
                <Avatar bg="teal.500" />
                <Heading color="teal.400" marginBottom='10'>Bem Vindo</Heading>


                <Box display='flex' padding='10' boxShadow='xl' maxWidth='90%' flexDirection='column' justifyContent='center' height='350' borderRadius='10' bgColor='white' width='400px'>
                    <FormControl paddingBottom='10'>
                        <InputGroup>
                        <InputLeftElement>
                                {/* <LockIcon color='gray.300' /> */}
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='email' placeholder="Endereço de Email" />

                        </InputGroup>
                    </FormControl>
                    <FormControl paddingBottom='5'>
                        <InputGroup>
                            <InputLeftElement>
                                <LockIcon color='gray.300' />
                                {/* <EmailIcon color='gray.300' /> */}
                            </InputLeftElement>
                            <Input type='password' placeholder="Senha" />

                        </InputGroup>
                    </FormControl>
                    <FormControl >
                        <FormHelperText paddingBottom='5' textAlign="right">
                            <Link>Esqueceu a Senha?</Link>
                        </FormHelperText>
                    </FormControl>
                    <FormControl paddingBottom='5'>
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                        >
                            Login
                        </Button>
                    </FormControl>

                    <Box>
                        New to us?{" "}
                        <Link color="teal.500" href="#">
                            Sign Up
                        </Link>
                    </Box>


                </Box>

            </Flex>

        </>
    )


}

export default Login;