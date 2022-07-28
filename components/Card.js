
import { useState } from 'react';
// import { useDisclosure } from '@chakra-ui/react'
import ModalDelete from './ModalDel';
import ModalEdit from './ModalEdt';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
 
  useColorModeValue,
  
} from '@chakra-ui/react';


export default function Card({ object }) {

  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  function handleModalEdit() {
    if (modalEdit === false) {
      setModalEdit(true)
    }
    setTimeout(() => {
      setModalEdit(false)
    }, 100)
  }

  function handleModalDelete() {
    if (modalDelete === false) {
      setModalDelete(true)
    }
    setTimeout(() => {
      setModalDelete(false)
    }, 100)
  }

  return (
    <div>
      <ModalEdit state={modalEdit} user={object}/>
      <ModalDelete state={modalDelete} user={object}/>
      <Center py={6} >
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: '100%', sm: '440px',md:'560px', lg:"560px"}}
          height={{ sm: '600px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
          alignItems='center'

        >

          <Flex maxW='80%' alignItems='center' flex={1} bg="blue.200">
            <Image

              objectFit="cover"
              boxSize={{ base: "100%", md: '100%' }}
              src={
                object.photo
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {object.name + ' ' + object.sobrenome}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {object.email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge>
            </Stack>

            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                onClick={handleModalEdit}

                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Editar
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                onClick={handleModalDelete}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'red.500',
                }}
                _focus={{
                  bg: 'red.500',
                }}>
                Deletar
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
}






