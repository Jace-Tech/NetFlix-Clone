import { Box } from '@chakra-ui/react'
import React from 'react'
import { INPUT_BG } from '../../utils/color'

const LoginInput = () => {
    return (
        <Box
            mb={4}
            as={"input"} flex={1} w={'100%'} display={"flex"} fontSize={"sm"}
            _placeholder={{ color: "whiteAlpha.700" }} placeholder={"Email or phone number"}
            outline={"none"} borderRadius={"sm"} border={"none"} color={"whiteAlpha.800"}
            py={4} px={4} bgColor={INPUT_BG}
        />
    )
}

export default LoginInput