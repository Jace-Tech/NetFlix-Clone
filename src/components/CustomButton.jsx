import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { RED, RED_HOVER } from '../utils/color'

const CustomButton = ({ style, text, children, hover, handleClick }) => {
    return (
        <Box 
            as={"button"} onClick={handleClick} 
            bgColor={RED} color={"white"} 
            _hover={{ bgColor: hover && RED_HOVER }} 
            fontSize={"md"} px={4} py={1.5} 
            borderRadius={"base"} {...style}
        >
            { text || children }
        </Box>
    )
}

export default CustomButton