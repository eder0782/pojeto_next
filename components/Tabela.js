
// import style from '../styles/table.module.css'
import api from '../utils/api'

import {

    Tr,

    Td,
    Button,
    IconButton,
    Avatar

} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export default function Tabela({ object }) {
    //console.log(object);




    const handleDelete = async (delEmail) => {


        // console.log(data);
        // console.log(typeof(email));
        await api.delete(`/user/${delEmail}`).then((response) => {
            console.log(response.data);
            // funcaoAtualiza();

        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            {/* <h1>{object[0].name}</h1> */}



            {/* <tr className={style.tr}>
                <td className={style.td}>{object.name}</td>
                <td className={style.td}>{object.email}</td>
                <td className={style.td}>{object.active?
                "Sim":
                "Não"}</td>
                <td className={style.td}><button onClick={()=>{handleDelete(object.email)}} >del</button></td>
            </tr> */}


            <Tr height='5px'>
                <Td ><Avatar src={object.photo}/> </Td>
                <Td >{object.name}</Td>
                <Td >{object.sobrenome}</Td>
                
                <Td >{object.email}</Td>
                <Td >{object.active ?
                    "Sim" :
                    "Não"}</Td>
                <Td textAlign='center'><IconButton
                    colorScheme='red'
                    aria-label='Search database'
                    icon={<DeleteIcon />}
                    onClick={() => { handleDelete(object.email) }}
                /></Td>
                {/* <IconButton colorScheme='tomato' icon={<DeleteIcon/>} onClick={() => { handleDelete(object.email) }} /> */}
            </Tr>










        </>
    )
}