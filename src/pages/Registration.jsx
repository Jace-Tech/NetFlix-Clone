import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import Seo from '../components/Seo'
import Footer from "../components/Footer"
import Setup1 from "../containers/registration/Setup1"
import Setup2 from "../containers/registration/Setup2"

import { FOOTER_MILK_COLOR } from "../utils/color.js"
import Setup3 from '../containers/registration/Setup3'
import Setup4 from '../containers/registration/Setup4'



const Registration = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        <Setup1 step={currentStep} handleClick={() => setCurrentStep(prevStep => prevStep + 1)} />,
        <Setup2 step={currentStep} handleClick={() => setCurrentStep(prevStep => prevStep + 1)} />,
        <Setup3 step={currentStep} handleClick={() => setCurrentStep(prevStep => prevStep + 1)} />,
        <Setup4 step={currentStep} handleClick={() => setCurrentStep(prevStep => prevStep + 1)} />,
    ]
    
    return (
        <Box minH={"100vh"}>
            <Seo title={"Netflix - Registration"} />
            <Header style={{ bgColor: "white", borderBottom: "1px solid #eee" }} />
            {steps[currentStep]}
            <Footer halfLink style={{ bgColor: FOOTER_MILK_COLOR, color: "blackAlpha.700" }} />
        </Box>
    )
}

export default Registration