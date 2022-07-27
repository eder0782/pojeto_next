import { useState } from 'react';
import { CircularProgress, CircularProgressLabel, Button, Box } from '@chakra-ui/react'

  
export default function Teste(){
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [estado,setEstado] = useState('hidden');
    function handleEstato(){
        if(estado==='hidden'){
            setEstado('visible')
        }
        setTimeout(()=>{
            setEstado('hidden')
        },3000)
    //    else{
    //         setEstado(false)
    //     }
    }
    return(
        <>
         <Button onClick={()=>{handleEstato()}}>Open Modal</Button>
              <Box position='fixed' visibility={estado} top='30%' left='50%'>
         <CircularProgress   isIndeterminate color='blue.300' />
         </Box>
        </>
    )
}



