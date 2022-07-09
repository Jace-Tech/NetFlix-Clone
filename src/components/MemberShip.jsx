import { Box, Flex, HStack, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import CustomButton from './CustomButton'

const MemberShip = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleBlur = () => {
        if(!email) {
            setError("Email is required")
            return
        }

        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            setError("Email is invalid")
            return
        }
        
        setError("")
    }
    return (
        <Box>
            <Text fontSize={"lg"}>Ready to watch? Enter your email to create or restart your membership.</Text>
            <Flex alignItems={"stretch"} mt={4}>
                <Input
                    borderRadius={"base"} color={"gray.600"}
                    w={"100%"} border={"none"}
                    borderBottomWidth={3} bgColor={"white"}
                    borderBottomStyle={error && "solid"} borderBottomColor={error && "red.600"}
                    h={"inherit"} placeholder={"Email address"}
                    _placeholder={{ opacity: 1 }} outline={"none"}
                    borderRightRadius={"none"} value={email}
                    onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur}

                />

                <CustomButton hover style={{ py: { base: 2, md: 3 }, px: { base: 4, md: 5 }, letterSpacing: "wide", fontSize: "2xl", borderLeftRadius: "none" }}>
                    <HStack alignItems={"center"}>
                        <Text>Get&nbsp;Started</Text>
                        <IoChevronForward />
                    </HStack>
                </CustomButton>
            </Flex>
            {error && <Text mt={2} fontSize={"xs"} fontWeight={"light"} color={"red.500"} textAlign={"left"}>{error}</Text>}
        </Box>
    )
}

export default MemberShip