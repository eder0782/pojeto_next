import { useEffect,useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import api from '../utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Router from 'next/router';
import ToastMessage from './ToastMessage';
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
//   Input,
//   useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
//   FormControl,
//   FormLabel
} from '@chakra-ui/react';
// import { useSelect } from '@mui/base';

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

export default function ModalDelete({ state, user }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [msg,setMsg]=useState('');
    // const[err,setErr]=useState(false);
    // const[ativar,setAtivar]=useState(false);

    useEffect(() => {
      if (state) {
        onOpen();
      }
  
    },)
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const handleDelete = async (delEmail) => {


        // console.log(data);
        // console.log(typeof(email));
        await api.delete(`/user/${delEmail}`).then((response) => {
            console.log(response.data);
            // setErr(response.data.error);
            // setMsg(response.data.message);
            // setAtivar(true);
            // setTimeout(()=>{
            //     setAtivar(false)
            // },500)
            // funcaoAtualiza();
            Alert(response.data.error,response.data.message);
            

        }).catch((err) => {
            console.log(err);
        })
        onClose();
        //Router.reload(Window.locarion)
        
    }
  
    return (
      <>
        <ToastContainer />
        <Modal
          initialFocusRef={initialRef}
          //   finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={{base:'md', lg:'lg'}}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmar Exclusão</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              
              Deseja Realmente Excluir esse usuário??
  
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{handleDelete(user.email)}} colorScheme='red' mr={3}>
                Deletar
              </Button>
              <Button  onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }