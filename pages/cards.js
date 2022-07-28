
import { useEffect, useState } from "react"
// import { useDisclosure } from '@chakra-ui/react'
import api from "../utils/api"
import Card from "../components/Card"
import SmallCentered from "../components/Footer"
import NavBar from "../components/NavBar"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

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
    CircularProgress,
    useColorModeValue,
}
    from "@chakra-ui/react";
import { faL } from "@fortawesome/free-solid-svg-icons"


export default function Cards() {
    const [user, setUser] = useState([{
        name:'teste',
        email:'teste@teste.com',
        password:'12121',
        sobrenome: 'lastName',
        photo: "https://img.icons8.com/ios-glyphs/344/user--v1.png",
        active: true,
        admin: true
      },{
        name:'teste',
        email:'teste@teste.com',
        password:'12121',
        sobrenome: 'lastName',
        photo: "https://img.icons8.com/ios-glyphs/344/user--v1.png",
        active: true,
        admin: true
      },{
        name:'teste',
        email:'teste@teste.com',
        password:'12121',
        sobrenome: 'lastName',
        photo: "https://img.icons8.com/ios-glyphs/344/user--v1.png",
        active: true,
        admin: true
      },{
        name:'teste',
        email:'teste@teste.com',
        password:'12121',
        sobrenome: 'lastName',
        photo: "https://img.icons8.com/ios-glyphs/344/user--v1.png",
        active: true,
        admin: true
      }
    ])
    const [progress, setProgress] = useState("hidden");
    const [isLoading, setLoading] = useState(false);


    // useEffect(() => {


    //     handleUser()
    //     // setTimeout(() => {
    //     //     // setLoading(true);
    //     //     setLoading(true);
    //     // }, 1000)
    //     // console.log('iciciou')
    // }, [])


    useEffect(() => {

        handleUser();

    }, [user])

    // if(progress==="hidden"){
    //     setProgress("visible")
    //     setTimeout(()=>{
    //         setProgress("hidden")
    //     },1000)

    // }
    async function handleUser() {
        //  setProgress('visible')
        await api.get('/listUserAll')
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        setTimeout(()=>{
            setLoading(true)
        },4000)    
        
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
                                        <Skeleton
                                            // height='40px'
                                            isLoaded={isLoading}
                                            // bg='green.500'
                                            // color='white'
                                            fadeDuration={5}
                                            bg={useColorModeValue('white', 'gray.900')}
                                            
                                            >
                                            
                                            <Card object={obj}></Card>
                                        </Skeleton>
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