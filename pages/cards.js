
import { useEffect, useState } from "react"
// import { useDisclosure } from '@chakra-ui/react'
import api from "../utils/api"
import Card from "../components/Card"
import SmallCentered from "../components/Footer"
import NavBar from "../components/NavBar"

import Router from 'next/router';
import {
    Flex,
    Wrap,
    WrapItem,
    Grid,
    GridItem,
    Center,
    SimpleGrid,
    Container,
    Box,
    CircularProgress
}
    from "@chakra-ui/react";


export default function Cards() {
    const [user, setUser] = useState([])
    const [progress,setProgress] = useState('hidden');

    useEffect(() => {
        handleUser()
        // Router.replace('/cards');
    },)

    async function handleUser() {
      //  setProgress('visible')
        await api.get('/listUserAll')
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
       // setProgress('hidden')
    }

    return (
        <div>
            <NavBar />

            <Box position='fixed' visibility={progress} top='30%' left='50%'>
                <CircularProgress isIndeterminate color='blue.300' />
            </Box>
            <Container maxW="80rem" centerContent >
                <SimpleGrid columns={{ base: '1', lg: '2' }} spacing={'10'}>

                    {
                        user.length > 0 ?
                            user.map((obj) => {
                                return (
                                    <Box key={obj._id}>
                                        <Card object={obj}></Card>
                                    </Box>
                                )
                                // <WrapItem>

                                // </WrapIte
                            })

                            :
                            <div></div>
                    }
                </SimpleGrid>
            </Container>
            <SmallCentered />

        </div>
    )

}

// export async function getServerSideProps(){

//    const resposta= await api.get('/listUserAll')
//           /*  .then((response) => {
//                // setUser(response.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })*/

//     return {
//         props: {
//           users: resposta.data
//         }
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         // revalidate: 10, // In seconds
//       }
// }