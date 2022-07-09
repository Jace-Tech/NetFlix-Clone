import { Box } from '@chakra-ui/react'
import React from 'react'
import { DIVIDER_COLOR } from '../utils/color'

const CustomDivider = () => {
    return (
        <Box h={2} bgColor={DIVIDER_COLOR} w={"full"} />
    )
}

export default CustomDivider