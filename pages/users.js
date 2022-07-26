
import { useEffect, useRef, useState } from "react";
// import style from '../styles/table.module.css'
import api from "../utils/api";
import Tabela from "../components/Tabela";
import NavBar from "../components/NavBar";
import Link from 'next/link'
import SmallCentered from "../components/Footer";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container
} from '@chakra-ui/react'

//import Card from "./Card";
//import style from '../styles/Cards.module.css';

export default function Users() {
    const [lis, setLis] = useState([]);
    const [colorCard, setColorCard] = useState(1);
    const [objeto, setObjeto] = useState({});
    const tabela = useRef();
    useEffect(() => {
        handleLista();
        // mudaColor();
    },);
    // useEffect();

    useEffect(() => {
        mudaColor();
    }, [objeto])
    async function handleLista() {
        // console.log('listou');
       await api.get('/listUserAll')
            .then(response => {

                setLis(response.data);
                // console.log(lis);

            })
            .catch(error => {

                console.log(error);
            })

    }

    function mudaColor() {
        if (colorCard == 5) {
            setColorCard(1);
        }
        else {
            setColorCard(colorCard + 1);
        }

    }



    function handleObjeto(obj) {
        // mudaColor();
        obj['colorCard'] = colorCard;
        // console.log(obj);
        return <Tabela key={obj._id} object={obj} ></Tabela>
    }
    return (
        <div>
            <NavBar/>
            <Container maxW='150vh' marginTop='2rem'>
                <TableContainer >


                    <Table variant='striped' >
                        <TableCaption>Tabela de Usuários</TableCaption>
                        <Tbody>
                            <Tr bgColor='gray' >
                                <Th color='whiteAlpha.800'>Foto</Th>
                                <Th color='whiteAlpha.800'>Nome</Th>
                                <Th color='whiteAlpha.800'>Sobrenome</Th>
                                <Th color='whiteAlpha.800'>Email</Th>
                                <Th color='whiteAlpha.800'>Ativo</Th>
                                <Th color='whiteAlpha.800' textAlign='center'>Deletar</Th>
                            </Tr >

                            {lis.length > 0 ?
                                lis.map((obj) => handleObjeto(obj))//<li key = { obj.id }><Card data={obj}/></li>) 
                                :
                                <Tr></Tr>
                            }

                        </Tbody>
                    </Table>



                </TableContainer>
                
            </Container>
            <SmallCentered/>
        </div>

    )
}