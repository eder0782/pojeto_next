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



} from '@chakra-ui/react';
import NextLink from "next/link"
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const breakpoints = {
        base:'column',
        md:'row'

        
      }

    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}

            backgroundColor="gray.200">
            {/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                This is responsive text
            </Text> */}
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
                        <Box display='flex'  flexDir={breakpoints} >

                            <FormControl  id="firstName" marginEnd='2' isRequired>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text" />
                            </FormControl>


                            <FormControl id="lastName">
                                <FormLabel>Sobrenome</FormLabel>
                                <Input type="text" />
                            </FormControl>

                        </Box>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Senha</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
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
                                loadingText="Submitting"
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
        </Flex>
    );
}