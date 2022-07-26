
import { useEffect, useState } from "react"
import api from "../utils/api"
import Card from "../components/Card"
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


export default function Cards() {
    const [user, setUser] = useState([])

    useEffect(() => {
        handleUser();
    }, [])

    async function handleUser() {
        await api.get('/listUserAll')
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <NavBar />

            <Container maxW="80rem" centerContent >
                <SimpleGrid columns={{ base: '1', lg: '2' }} spacing={'10'}>

                    {
                        user.length > 0 ?
                            user.map((obj) => {
                                return (
                                    <Box>
                                        <Card key={obj._id} object={obj} />
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

        </div>
    )

}