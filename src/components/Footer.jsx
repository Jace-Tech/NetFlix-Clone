import { Box, Container, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as ReactLink } from "react-router-dom"
import { homeData } from '../data/home'


const Footer = ({ style, halfLink }) => {
    const [footerLinks, setFooterLinks] = useState(homeData.footer.links)
    const [country, setCountry] = useState(null)

    // GET USER'S IP ADDRESS
    const handleFetchIpAddress = async () => {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        handleFetchIpData(data.ip)
    }

    // GET USER'S LOCATION INFO USING IT'S IP ADDRESS
    const handleFetchIpData = async (address) => {
        // const response = await fetch(`https://ipapi.co/json/`)
        const response = await fetch(`http://ip-api.com/json/${address}`)
        const data = await response.json()
        setCountry(data.country)
    }

    useEffect(() => {
        handleFetchIpAddress()
    }, [])

    return (
        
        <Box py={{ base: 20, sm: 16, lg: 12 }} color={"whiteAlpha.500"} bgColor={"black"} {...style}>
            <Container maxW={"container.xl"} w={"95%"}>
                <Link fontSize={"md"}>Questions? Contact us.</Link>

                {
                    halfLink ? (
                        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={5}>
                            {
                                footerLinks && footerLinks.map((links, index) => (
                                    <List spacing={3} key={index}>
                                        {links.slice(0, 2).map(({ external, to, name }, _index) => (
                                            <ListItem fontSize={"sm"} fontWeight={"light"} key={`${index}-${_index}`}>
                                                <Link as={external ? "a" : ReactLink} href={external ? to : ""} to={!external ? to : ""}>{name}</Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                ))
                            }
                        </SimpleGrid>
                    ) : (
                        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={5}>
                            {
                                footerLinks && footerLinks.map((links, index) => (
                                    <List spacing={3} key={index}>
                                        {links.map(({ external, to, name }, _index) => (
                                            <ListItem fontSize={"sm"} fontWeight={"light"} key={`${index}-${_index}`}>
                                                <Link as={external ? "a" : ReactLink} href={external ? to : ""} to={!external ? to : ""}>{name}</Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                ))
                            }
                        </SimpleGrid>
                    )
                }



                <Box mt={8}>
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Netflix {country && country}</Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer