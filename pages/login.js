import { useRef, useState } from "react";
import {
    Box,
    Flex,
    Input,
    Form,
    InputLeftElement,
    Button,
    Link,
    Stack,
    Center

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
import NextLink from "next/link"
import { EmailIcon, LockIcon, ArrowRightIcon } from '@chakra-ui/icons'
import Router from "next/router";
// import Alerta from "../components/Alert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../utils/api";

function Alert(error, message) {
    if (error) {
        toast.error(message, {
            theme: "colored"
        })

    }
    else {
        toast.success(message, {
            theme: "colored"
        })
    }
}


// 
function Login() {
    const [loading, setLoading] = useState(false);
    // const [message,setMessage]=useState('');
    // const[error,setError]=useState(false);
    const email = useRef('');
    const pass = useRef('');

    async function handleLogin(event) {
        // Router.push('/home2')
        event.preventDefault();
        // console.log(email.current.value)
        // let message='ola mundo';
        // let error = true;
        // Alert(error,message);
        setLoading(true);
        await api.post('/login', {
            email: email.current.value,
            password: pass.current.value
        })
            .then(function (response) {
                // console.log('funcionou')
                // console.log(response.data);
                if (response.data.error) {
                    //setAlert()
                    Alert(response.data.error, response.data.message);

                }
                else {
                    Router.push('/home2')
                }
            })
            .catch(function (error) {

                console.log(error);
            })

        setLoading(false);


    }

    return (

        <>
            <ToastContainer />
            <Flex flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                // justifyContent="center"
                alignItems="center"
                paddingTop='5rem'>
                <form onSubmit={handleLogin}>
                    <Stack align="Center" spacing="4">
                        <Avatar bg="teal.500" />
                        <Heading color="teal.400" marginBottom='10'>Bem Vindo</Heading>

                        {/* <form onSubmit={handleLogin}> */}

                        <Box onSubmit={handleLogin} display='flex' paddingLeft='10' paddingRight="10" boxShadow='xl' maxWidth='90%' flexDirection='column' justifyContent='center' height='350' borderRadius='10' bgColor='white' width='400px'>
                            <FormControl isRequired paddingBottom='10'>
                                <InputGroup>
                                    <InputLeftElement>
                                        {/* <LockIcon color='gray.300' /> */}
                                        <EmailIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input ref={email} type='email' placeholder="Endereço de Email" />

                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired paddingBottom='5'>
                                <InputGroup>
                                    <InputLeftElement>
                                        <LockIcon color='gray.300' />
                                        {/* <EmailIcon color='gray.300' /> */}
                                    </InputLeftElement>
                                    <Input ref={pass} type='password' placeholder="Senha" />

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
                                    isLoading={loading}
                                    spinnerPlacement='end'
                                    loadingText='Enviando'
                                    rightIcon={<ArrowRightIcon/>}

                                >
                                    Login
                                </Button>
                            </FormControl>

                            <Box>
                                Não tem Cadastro?{" "}
                                <NextLink href="/signup">
                                    <Link color="teal.500" >
                                        Cadastre-se
                                    </Link>
                                </NextLink>
                            </Box>


                        </Box>
                    </Stack>
                </form>
                {/* </form> */}

            </Flex>

        </>
    )


}

export default Login;