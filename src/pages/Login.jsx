import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import bg from "../assets/bg.jpg"
import Header from '../components/Header'
import Seo from '../components/Seo'
import Footer from "../containers/home/Footer"
import LoginForm from '../containers/login/LoginForm'


const Login = () => {

    return (
        <Flex
            overflowX={"hidden"} minH={"100vh"}
            bg={{ base: "black", lg: `linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .4), rgba(0, 0, 0, .7)), url(${bg})` }}
            flexDir={"column"}
        >
            <Seo title={"Netflix - Login"} />
            <Header noSignIn />
            <div data-aos={"fade-up"} data-aos-duration={"1500"} data-aos-delay={"50"}>
                <LoginForm />
            </div>
            <Box mt={{ base: 10, md: 16, lg: 20 }}>
                <Footer halfLink style={{ bgColor: "rgba(0, 0, 0, .85)" }} />
            </Box>
        </Flex>
    )
}

export default Login