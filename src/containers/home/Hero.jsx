import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import MemberShip from '../../components/MemberShip'
// import motion from 'framer-motion'

const Hero = () => {
    return (
        <Box flex={1} display={"flex"} alignItems={"center"} my={{ base: 5, md: 10 }}>
            {/* Animate div to fade in with fraamer motion */}
            <Container maxW={"container.md"} w={{ base: "95%", sm: "90%", md: "70%", lg: "55%" }} textAlign={"center"} minH={300} letterSpacing={"wide"} color={"white"}>
                <div className="brand-name" data-aos={"fade-up"} data-aos-duration={"2000"} data-aos-delay="100" data-aos-anchor=".brand-name">
                    <Heading fontSize={"5xl"} fontWeight={"semibold"} >Unlimited movies, TV <br /> shows, and more.</Heading>
                </div>

                <div className={"brand-subtitle"} data-aos-duration={"2000"} data-aos="fade-up" data-aos-delay="200" data-aos-anchor=".brand-subtitle">
                    <Text mt={3} letterSpacing={"wide"} fontSize={"2xl"}>Watch anywhere. Cancel anytime.</Text>
                </div>

                <div className={"brand-message"} data-aos-duration={"2000"} data-aos="fade-up" data-aos-delay="300">
                    <Box mt={4}>
                        <MemberShip />
                    </Box>
                </div>
            </Container>
        </Box>
    )
}

export default Hero