import React from 'react'
import { Box } from '@chakra-ui/react'
import bg from "../../assets/bg.jpg"
import CustomDivider from '../../components/CustomDivider'
import Header from '../../components/Header'
import Hero from './Hero'

const HomeHeader = () => {
    return (
        <Box
            w={"full"}
            minH={{base: "80vh", sm: "85vh", md: "95vh", lg: "105vh"}}
            display={"flex"}
            flexDir={"column"}
            bg={`linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .5), rgba(0, 0, 0, .8)), url(${bg})`}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
        >
            <Header />
            <Hero />
            <CustomDivider />
        </Box>
    )
}

export default HomeHeader