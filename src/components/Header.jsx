import { Box, Container, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink} from "react-router-dom"
import logo from "../assets/logo.png"
import CustomButton from './CustomButton'

const Header = ({ type }) => {

    return (
        <Box overflowX={"hidden"} py={2}>
            <Container w={"94%"} maxW={"container.xl"}>
                <Flex alignItems={"center"} >
                    <Link as={ReactLink} to={'/'}>
                        <Image src={logo} w={134} />
                    </Link>

                    <Spacer />

                    <CustomButton text={"Sign In"} />
                </Flex>
            </Container>
        </Box>
    )
}

export default Header