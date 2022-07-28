
import { useState } from 'react'
import { Skeleton, SkeletonCircle,Button,Stack,Box, SkeletonText } from '@chakra-ui/react'

  
export default function Teste(){
    const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Stack padding={4} spacing={1}>
      <Skeleton height='40px' isLoaded={isLoaded}>
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        isLoaded={isLoaded}
        bg='green.500'
        color='white'
        fadeDuration={1}
      >
        <Box>Hello React!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        isLoaded={isLoaded}
        fadeDuration={4}
        bg='blue.500'
        color='white'
      >
        <Box>Hello ChakraUI!</Box>
      </Skeleton>

      <Box textAlign='center'>
        <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
      </Box>
    </Stack>
  )
}



