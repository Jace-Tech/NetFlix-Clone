import { Box, Container, Flex, Heading, HStack, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoAddSharp, IoCloseOutline } from 'react-icons/io5'
import { DOWNLOAD_BLUE, FAG_COLOR } from '../../utils/color'

import tv from "../../assets/tv.png"
import movie from "../../assets/vid-1.mp4"
import CustomDivider from '../../components/CustomDivider'
import phone from "../../assets/phone.jpg"
import download from "../../assets/download.gif"
import boxshot from "../../assets/boxshot.png"
import kids from "../../assets/img-1.png"

import MemberShip from '../../components/MemberShip'



const FAQItem = ({ question, answer }) => {
    return (
        <AccordionItem color={"white"} border={"none"} my={2} bgColor={FAG_COLOR}>
            {({ isExpanded }) => (
                <>
                    <AccordionButton p={4} fontSize={"2xl"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                        {question}
                        {!isExpanded ? <AccordionIcon as={IoAddSharp} /> : <AccordionIcon as={IoCloseOutline} />}
                    </AccordionButton>
                    <AccordionPanel borderTop={"1px solid black"}>
                        <Box>
                            {
                                answer.split("\n")?.length > 1 ?
                                    answer.split("\n").map((text, index) => <Text fontSize={"lg"} my={3} lineHeight={"8"} color={"whiteAlpha.800"} fontWeight={"light"} key={`${Date.now()}-${index}`}>{text}</Text>) :
                                    <Text fontSize={"lg"} my={3} lineHeight={"8"} color={"whiteAlpha.800"} fontWeight={"light"}>{answer}</Text>
                            }
                        </Box>
                    </AccordionPanel>
                </>

            )}
        </AccordionItem>
    )
}


const Section = () => {
    const [FAQs, setFAQs] = useState(null)

    const handleGetFAQs = async () => {
        const request = await fetch('/src/data/home.json')
        const data = await request.json()
        setFAQs(data.landing.faq)
    }

    useEffect(() => {
        handleGetFAQs()
    }, [])

    return (
        <>
            {/* ENJOY SECTION */}
            <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
                <Container maxW={"container.xl"} w={"95%"} textAlign={{ base: "center", md: "center", lg: "left" }}>
                    <Flex flexDir={{ base: "column", md: "column", lg: "row" }} alignItems={"center"} spacing={8}>
                        <Box color={"white"} w={{ base: "100%", md: "100%", lg: "45%" }}>
                            <div data-aos={"fade-right"} data-aos-delay={"50"}>
                                <Heading fontSize={"5xl"} fontWeight={"semibold"}> Enjoy on your TV.</Heading>
                                <Text mt={4} fontSize={"2xl"}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Text>
                            </div>
                        </Box>

                        <Spacer />

                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box pos={"relative"} w={"fit-content"} maxW={{ base: "fit-content", md: "", lg: 530 }} h={"fit-content"}>
                                <div data-aos={"fade-left"} data-aos-delay={"100"}>
                                    <Box pos={"absolute"} left={"13%"} top={"20%"} w={"73%"} zIndex={1} objectFit={"contain"} as={"video"} src={movie} loop autoPlay />
                                    <Image src={tv} zIndex={2} position="relative" />
                                </div>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <CustomDivider />

            {/* DOWNLOAD SECTION */}
            <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
                <Container maxW={"container.xl"} w={"95%"} textAlign={{ base: "center", md: "center", lg: "left" }}>
                    <Flex flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row-reverse" }} alignItems={"center"} spacing={8}>
                        <Box color={"white"} w={{ base: "100%", md: "100%", lg: "45%" }}>
                            <div data-aos={"fade-left"} data-aos-delay={"50"}>
                                <Heading fontSize={"5xl"} fontWeight={"semibold"}>Download your shows to watch offline.</Heading>
                                <Text mt={4} fontSize={"2xl"}>Save your favorites easily and always have something to watch.</Text>
                            </div>
                        </Box>

                        <Spacer />

                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <div data-aos={"fade-right"} data-aos-delay={"100"}>
                                <Box pos={"relative"} w={"fit-content"} maxW={{ base: "fit-content", md: "", lg: 504 }} h={"fit-content"}>
                                    <HStack gap={3} bgColor={"black"} minW={{ base: "90%", md: "80%", lg: "70%" }} borderRadius={"xl"} zIndex={2} p={3} pos={"absolute"} border={`2px solid`} borderColor={"whiteAlpha.400"} left={"50%"} transform={"translateX(-50%)"} bottom={"6%"}>
                                        <Image src={boxshot} w={"12"} objectFit={"contain"} />
                                        <Box>
                                            <Heading fontSize={"lg"} color={"white"} fontWeight={"semibold"}>Stranger&nbsp;Things</Heading>
                                            <Text fontSize={"sm"} textAlign={"left"} color={DOWNLOAD_BLUE}>Downloading...</Text>
                                        </Box>
                                        <Spacer />
                                        <Image src={download} w={"12"} />
                                    </HStack>
                                    <Image src={phone} position="relative" />
                                </Box>
                            </div>
                        </Box>  
                    </Flex>
                </Container>
            </Box>
            <CustomDivider />

            {/* WATCH SECTION */}
            <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
                <Container maxW={"container.xl"} w={"95%"} textAlign={{ base: "center", md: "center", lg: "left" }}>
                    <Flex flexDir={{ base: "column", md: "column", lg: "row" }} alignItems={"center"} spacing={8}>
                        <Box color={"white"} w={{ base: "100%", md: "100%", lg: "45%" }}>
                            <div data-aos={"fade-up"} data-aos-delay={"100"}>
                                <Heading fontSize={"5xl"} fontWeight={"semibold"}>Watch everywhere.</Heading>
                                <Text mt={4} fontSize={"2xl"}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Text>
                            </div>
                        </Box>
                        <Spacer />
                    </Flex>
                </Container>
            </Box>
            <CustomDivider />

            {/* KIDS SECTION */}
            <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
                <Container maxW={"container.xl"} w={"95%"} textAlign={{ base: "center", md: "center", lg: "left" }}>
                    <Flex flexDir={{ base: "column", md: "column", lg: "row" }} alignItems={"center"} spacing={8}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box pos={"relative"} w={"fit-content"} maxW={{ base: "fit-content", md: "", lg: 504 }} h={"fit-content"}>
                                <div data-aos={"fade-right"} data-aos-delay={"50"}>
                                    <Image src={kids} />
                                </div>
                            </Box>
                        </Box>

                        <Spacer />

                        <Box color={"white"} w={{ base: "100%", md: "100%", lg: "45%" }}>
                            <div data-aos={"fade-left"} data-aos-delay={"100"}>
                                <Heading fontSize={"5xl"} fontWeight={"semibold"}>Create profiles for kids.</Heading>
                                <Text mt={4} fontSize={"2xl"}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Text>
                            </div>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <CustomDivider />

            {/* FAQS SECTION */}
            <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
                <Container maxW={"container.md"} w={"95%"} textAlign={{ base: "center", md: "center", lg: "left" }}>
                    <div data-aos={"fade"} data-aos-delay={"50"}>
                        <Heading fontSize={"5xl"} color={"white"} textAlign={"center"} fontWeight={"semibold"}>Frequently Asked Questions</Heading>
                    </div>

                    <Accordion allowToggle mt={12}>
                        {FAQs && FAQs.map((faq, index) => (
                            <div key={faq.id} data-aos={index % 2 == 0 ? "fade-right" : "fade-left"} data-aos-duration={"4000"} data-aos-delay={`${index * 100}`}>
                                <FAQItem {...faq} />
                            </div>
                        ))}
                    </Accordion>

                    <Box my={12} color={"white"} textAlign={"center"}>
                        <div data-aos={"fade-up"} data-aos-delay={"100"}>
                            <MemberShip />
                        </div>
                    </Box>
                </Container>
            </Box>
            <CustomDivider />
        </>
    )
}

export default Section