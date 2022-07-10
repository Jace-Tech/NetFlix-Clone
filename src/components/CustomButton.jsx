import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { DISABLED, RED, RED_HOVER } from '../utils/color'

const CustomButton = ({ style, disabled, text, children, hover, handleClick }) => {
    return (
        <Box 
            disabled={disabled}
            as={"button"} onClick={handleClick} 
            bgColor={disabled ? DISABLED : RED} color={"white"} 
            _hover={{ bgColor: hover && RED_HOVER }} 
            fontSize={"md"} px={4} py={1.5} 
            borderRadius={"base"} {...style}
            cursor={disabled ? "not-allowed" : "pointer"}
        >
            { text || children }
        </Box>
    )
}

export default CustomButton