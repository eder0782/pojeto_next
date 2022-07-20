
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SmallCentered from "../components/Footer";
import ArticleList from "../components/Blog";


function Home2() {

    return(
        <Box height='100vh'>
        <NavBar>

        </NavBar>
        
        <ArticleList/>
        <SmallCentered />


        </Box>
    )
    
}

export default Home2;