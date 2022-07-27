
import { useEffect, useState } from "react"
import api from "../utils/api"
import Card from "../components/Card"
import SmallCentered from "../components/Footer"
import NavBar from "../components/NavBar"
import {
    Flex,
    Wrap,
    WrapItem,
    Grid,
    GridItem,
    Center,
    SimpleGrid,
    Container,
    Box
}
    from "@chakra-ui/react";


export default function Cards({users}) {
    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(users);
    },)

   /* async function handleUser() {
        await api.get('/listUserAll')
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }*/

    return (
        <div>
            <NavBar />


            <Container maxW="80rem" centerContent >
                <SimpleGrid columns={{ base: '1', lg: '2' }} spacing={'10'}>

                    {
                        user.length > 0 ?
                            user.map((obj) => {
                                return (
                                    <Box key={obj._id}>
                                        <Card  object={obj}></Card>
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
            <SmallCentered/>

        </div>
    )

}

export async function getStaticProps(){

   const resposta= await api.get('/listUserAll')
          /*  .then((response) => {
               // setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })*/

    return {
        props: {
          users: resposta.data
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
      }
}