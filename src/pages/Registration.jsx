import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Seo from '../components/Seo'

const Registration = () => {
    return (
        <Box minH={"100vh"}>
            <Seo title={"Netflix - Registration"} />
            <Header style={{bgColor: "white"}} />
        </Box>
    )
}

export default Registration