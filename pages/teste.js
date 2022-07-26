


  import { useDisclosure } from '@chakra-ui/react'
  import { useEffect, useState, useRef } from 'react';
  
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'

export default function Teste(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [estado,setEstado] = useState(false);
    function handleEstato(){
        if(estado===false){
            setEstado(true)
        }
        setTimeout(()=>{
            setEstado(false)
        },500)
    //    else{
    //         setEstado(false)
    //     }
    }
    return(
        <>
         <Button onClick={()=>{handleEstato()}}>Open Modal</Button>
        <InitialFocus state={estado} />
        </>
    )
}



export function InitialFocus({state}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        if(state){
            onOpen();
        }
        
    },)
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
        //   finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }