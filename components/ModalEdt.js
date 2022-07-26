import { useEffect,useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import api from '../utils/api'
import {
//   Badge,
  Button,
//   Center,
//   Flex,
//   Heading,
//   Image,
//   Link,
//   Stack,
//   Text,
  Input,
//   useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel
} from '@chakra-ui/react';


export default function ModalEdit({ state, user }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
      if (state) {
        onOpen();
      }
  
    })
    const [name, setName] = useState(user.name)
    const [lastName,setLastName] = useState(user.sobrenome)
    const [email,setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const initialRef = useRef(null)

    async function handleEdit(){
        //console.log(emailEdit)
        await api.post(`/user/update/${email}`,{
            name,
            email,
            password,
            sobrenome:lastName,
            photo:"https://img.icons8.com/ios-glyphs/344/user--v1.png",
            active:true,
            admin:true
        }).then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })


        onClose();

    }
  
    return (
      <>
       
        <Modal
          initialFocusRef={initialRef}
          //   finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Usuário</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input ref={initialRef}  value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </FormControl>
              <FormControl>
                <FormLabel>Sobrenome</FormLabel>
                <Input value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleEdit} colorScheme='blue' mr={3}>
                Salvar
              </Button>
              <Button onClick={onClose}>Cancela</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  