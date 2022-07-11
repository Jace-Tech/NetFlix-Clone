import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../components/CustomButton'
import Header from '../components/Header'
import Seo from '../components/Seo'
import { DIVIDER_COLOR } from '../utils/color'
import image404 from "../assets/404.png"
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const navigate = useNavigate()
    return (
        <Box minH={"100vh"} bgColor={DIVIDER_COLOR}>
            <Seo title={"Netflix - Page Not Found"} />
            <Header noSignIn={true} />
            <Box color={"whiteAlpha.900"}>
                <Container maxW={"container.lg"} w={"95%"}>
                    <Flex flexWrap={"wrap"} alignItems={"center"} flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }} pb={{base: 20, md: 20}} justifyContent={{ base: "center", md: "center", lg: "space-between"}}>
                        <Box w={{base: "100%", sm: "90%", md: "70%", lg: "45%"}} textAlign={{base: "center", md: "center", lg: "left"}} mt={"10"} >
                            <div data-aos={"slide-right"} data-aos-duration={"1500"} data-aos-delay={"0"}>
                                <Heading fontSize={"6xl"} fontWeight={600}>Something went wrong</Heading>
                            </div>

                            <div data-aos={"slide-right"} data-aos-duration={"1500"} data-aos-delay={"50"}>
                                <Text mt={6} lineHeight={"8"}>Sorry we couldn't find the page you were looking. <br /> To return to the Netflix homepage click on the button below.</Text>
                            </div>

                            <div data-aos={"slide-right"} data-aos-duration={"1500"} data-aos-delay={"100"}>
                                <CustomButton handleClick={() => navigate('/')} style={{ mt: 4, border: "1px solid white", py: 3, px: 10, bgColor: "transparent",  }}>
                                    Go Home
                                </CustomButton>
                            </div>
                        </Box>

                        <Flex w={{ base: "100%", md: "500px" }} pos={"relative"} alignItems={"center"} justifyContent={"center"}>
                            <Image position={"relative"} top={{ base: 0, sm: 0, md: 0, lg: "-80px" }} src={image404} className={"bounce"} w={"35rem"} transform={"translateY(-100px)"} />
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}

export default Error404