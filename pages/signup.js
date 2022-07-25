import { useRef, useState } from 'react';
import Router from "next/router";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    AlertDialog,



} from '@chakra-ui/react';
import NextLink from "next/link"

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../utils/api";

function Alert(error,message){
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


export default function SignupCard() {

    const email =useRef('');
    const pass =useRef('');
    const name =useRef('');
    const sobrenome =useRef('');
    const [loading,setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const breakpoints = {
        base: 'column',
        md: 'row'


    }
    function ResetForm(){
        email.current.value='';
        pass.current.value='';
        name.current.value='';
        sobrenome.current.value='';
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('enviou');
        setLoading(true);
        await api.post('/user', {
            name: name.current.value, 
            sobrenome: sobrenome.current.value,
            password: pass.current.value,
            email:email.current.value,
            active: true
          })
          .then(function (response) {
            // console.log('funcionou')
            // console.log(response.data);
            if(response.data.error){
              //setAlert()
              Alert(response.data.error, response.data.message);
      
            }
            else{
                
                Alert(response.data.error, response.data.message);
                ResetForm();

            }
          })
          .catch(function (error) {
           
            console.log(error);
          })

          setLoading(false);

    }

    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}

            backgroundColor="gray.200">
                <ToastContainer />
            {/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                This is responsive text
            </Text> */}
            <form onSubmit={handleSubmit}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} color='teal.500' textAlign={'center'}>
                            Cadastre-se
                        </Heading>
                        <Text fontSize={'lg'} align='center' color={'teal.400'}>
                            Tenha acesso à todos os nossos recursos!!
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Box display='flex' flexDir={breakpoints} >

                                <FormControl id="firstName" marginEnd='2' isRequired>
                                    <FormLabel>Nome</FormLabel>
                                    <Input ref={name} type="text" />
                                </FormControl>


                                <FormControl id="lastName">
                                    <FormLabel>Sobrenome</FormLabel>
                                    <Input ref={sobrenome} type="text" />
                                </FormControl>

                            </Box>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input ref={email} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Senha</FormLabel>
                                <InputGroup>
                                    <Input ref={pass} type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    isLoading={loading}
                                    spinnerPlacement='end'
                                    loadingText='Enviando'
                                    type='submit'
                                    size="lg"
                                    bg={'teal.500'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.400',
                                    }}>
                                    Enviar
                                </Button>
                            </Stack>

                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Já tem cadastro?
                                    <NextLink href='/login' passHref>
                                        <Link color="teal.500" >Login</Link>
                                    </NextLink>

                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </form>
        </Flex>
    );
}