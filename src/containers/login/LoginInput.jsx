import { Box } from '@chakra-ui/react'
import React from 'react'
import { INPUT_BG } from '../../utils/color'

const LoginInput = ({ placeholder, value, type, handleChange }) => {
    return (
        <Box
            onChange={handleChange} value={value}
            mb={4} type={ type || "text"}
            as={"input"} flex={1} w={'100%'} display={"flex"} fontSize={"sm"}
            _placeholder={{ color: "whiteAlpha.700" }} placeholder={placeholder}
            outline={"none"} borderRadius={"sm"} border={"none"} color={"whiteAlpha.800"}
            py={4} px={4} bgColor={INPUT_BG}
        />
    )
}

export default LoginInput