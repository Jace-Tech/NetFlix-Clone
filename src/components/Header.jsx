import { Box, Container, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink, useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
import CustomButton from './CustomButton'

const Header = ({ type, noSignIn, style }) => {
    const navigate = useNavigate()

    return (
        <Box as={"header"} overflowX={"hidden"} w={"100%"} py={2} {...style}>
            <Container w={"95%"} maxW={"container.xl"}>
                <Flex alignItems={"center"} >
                    <Link as={ReactLink} to={'/'}>
                        <Image src={logo} w={134} />
                    </Link>

                    <Spacer />
                    
                    { !noSignIn && <CustomButton handleClick={() => navigate('/login') } text={"Sign In"} /> }
                </Flex>
            </Container>
        </Box>
    )
}

export default Header