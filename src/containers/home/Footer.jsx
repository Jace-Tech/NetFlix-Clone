import { Box, Container, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as ReactLink } from "react-router-dom"



const Footer = () => {
    const [footerLinks, setFooterLinks] = useState(null)
    const [country, setCountry] = useState(null)

    const handleGetFooterLinks = async () => {
        const response = await fetch('/src/data/home.json')
        const data = await response.json()
        setFooterLinks(data.footer.links)
    }

    const handleFetchIpAddress = async () => {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        console.log({data})
        handleFetchIpData(data.ip)
    }

    const handleFetchIpData = async (address) => {
        // const response = await fetch(`https://ipapi.co/json/`)
        const response = await fetch(`http://ip-api.com/json/${address}`)
        const data = await response.json()
       setCountry(data.country)
    }

    useEffect(() => {
        handleGetFooterLinks()
        handleFetchIpAddress()
    }, [])
    return (
        <Box py={{ base: 20, sm: 16, lg: 12 }} bgColor={"black"}>
            <Container maxW={"container.xl"} w={"90%"}>
                <Box>
                    <Link fontSize={"md"} color={"whiteAlpha.500"}>Questions? Contact us.</Link>
                </Box>

                <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={5}>
                    {
                        footerLinks && footerLinks.map((links, index) => (
                            <List spacing={3} key={index}>
                                {links.map(({ external, to, name }, _index) => (
                                    <ListItem fontSize={"sm"} fontWeight={"light"} color={"whiteAlpha.500"} key={`${index}-${_index}`}>
                                        <Link  as={ external ? "a" : ReactLink } href={ external && to } to={ !external && to }>{ name }</Link>
                                    </ListItem>
                                ))}
                            </List>
                        ))
                    }
                </SimpleGrid>

                <Box mt={8}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} color={"whiteAlpha.500"}>Netflix { country }</Text>
                </Box>
            </Container>
        </Box>
    )
}   

export default Footer