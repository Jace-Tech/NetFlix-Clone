import { Box, Checkbox, Container, Heading, HStack, Link, SlideFade, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import LoginInput from './LoginInput'
import { Link as ReactLink } from 'react-router-dom'

const LoginForm = () => {
    const { isOpen, onOpen } = useDisclosure()

    return (
        <Box flex={1} as={"section"}>
                <Container w={{ base: "100%", md: "95%" }} maxW={"container.sm"} display={"flex"} justifyContent={"center"}>
                    <Box w={{ base: "100%", sm: "90%", lg: "80%" }} color={"white"} bgColor={"rgba(0, 0, 0, .75)"} p={{ base: 10, sm: 12, lg: 16 }} borderRadius={"md"}>
                        <Heading fontWeight={"semibold"} fontSize={"3xl"}>Sign In</Heading>

                        <Box mt={10}>
                            <LoginInput />
                            <LoginInput />
                        </Box>

                        <Box mt={10}>
                            <CustomButton text={"Sign In"} style={{ w: "100%", py: 3, fontWeight: "semibold" }} />
                            <HStack mt={3}>
                                <Checkbox size={"sm"} colorScheme={"gray"}>
                                    <Text color={"whiteAlpha.700"} fontSize={"sm"}>Remember me</Text>
                                </Checkbox>
                                <Spacer />
                                <Link color={"whiteAlpha.700"} fontSize={"sm"} to={"/login/help"} as={ReactLink}>Need help?</Link>
                            </HStack>

                            <Box mt={20}>
                                <HStack alignItems={"center"}>
                                    <Text color={"whiteAlpha.700"} fontSize={"md"}>New to Netflix?</Text>
                                    <Link as={ReactLink} to={"/"}>Sign up now.</Link>
                                </HStack>
                                <Text color={"whiteAlpha.700"} fontSize={"xs"} mt={2}>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!isOpen && <Link onClick={onOpen} color={"blue.400"} as={"button"}>Learn more</Link>}</Text>
                            </Box>

                            {
                                isOpen &&
                                <SlideFade in={isOpen}>
                                    <Box mt={5}>
                                        <Text color={"whiteAlpha.700"} fontSize={"xs"}>The information collected by Google reCAPTCHA is subject to the Google <Link color={"blue.400"} href={"https://policies.google.com/privacy"} as={"a"}>Privacy Policy</Link> and <Link color={"blue.400"} href={"https://policies.google.com/terms"} as={"a"}>Terms of Service</Link>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</Text>
                                    </Box>
                                </SlideFade>
                            }
                        </Box>
                    </Box>
                </Container>
            </Box>
    )
}

export default LoginForm