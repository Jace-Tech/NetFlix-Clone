import { Box, Container, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as ReactLink } from "react-router-dom"



const Footer = ({ style, halfLink }) => {
    const [footerLinks, setFooterLinks] = useState(null)
    const [country, setCountry] = useState(null)

    const handleGetFooterLinks = async () => {
        const response = await fetch('/src/data/home.json')
        const data = await response.json()
        setFooterLinks(data.footer.links)
    }

    // GET USER'S IP ADDRESS
    const handleFetchIpAddress = async () => {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        console.log({ data })
        handleFetchIpData(data.ip)
    }

    // GET USER'S LOCATION INFO USING IT'S IP ADDRESS
    const handleFetchIpData = async (address) => {
        // const response = await fetch(`https://ipapi.co/json/`)
        const response = await fetch(`http://ip-api.com/json/${address}`)
        const data = await response.json()
        console.log({ data })
        setCountry(data.country)
    }

    useEffect(() => {
        handleGetFooterLinks()
        handleFetchIpAddress()
    }, [])

    return (
        <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"} {...style}>
            <Container maxW={"container.xl"} w={"95%"}>
                <div data-aos={"fade-up"}>
                    <Link fontSize={"md"} color={"whiteAlpha.500"}>Questions? Contact us.</Link>
                </div>

                {
                    halfLink ? (
                        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={5}>
                            {
                                footerLinks && footerLinks.map((links, index) => (
                                    <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={`${index * 100}`} key={index}>
                                        <List spacing={3} >
                                            {links.slice(0, 2).map(({ external, to, name }, _index) => (
                                                <ListItem fontSize={"sm"} fontWeight={"light"} color={"whiteAlpha.500"} key={`${index}-${_index}`}>
                                                    {console.table({ index, _index, to })}
                                                    <Link as={external ? "a" : ReactLink} href={external && to} to={!external && to}>{name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                ))
                            }
                        </SimpleGrid>
                    ) : (
                        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={5}>
                            {
                                footerLinks && footerLinks.map((links, index) => (
                                    <div data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={`${index * 100}`} key={index}>
                                        <List spacing={3} >
                                            {links.map(({ external, to, name }, _index) => (
                                                <ListItem fontSize={"sm"} fontWeight={"light"} color={"whiteAlpha.500"} key={`${index}-${_index}`}>
                                                    {console.table({ index, _index, to })}
                                                    <Link as={external ? "a" : ReactLink} href={external && to} to={!external && to}>{name}</Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                ))
                            }
                        </SimpleGrid>
                    )
                }



                <Box mt={8}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} color={"whiteAlpha.500"}>Netflix {country && country}</Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer