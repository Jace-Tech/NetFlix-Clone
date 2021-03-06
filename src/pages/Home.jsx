import { Box } from '@chakra-ui/react'
import React from 'react'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import HomeHeader from '../containers/home/HomeHeader'
import Section from '../containers/home/Section'


const Home = () => {
    return (
        <Box overflowX={"hidden"}>
            <Seo title={"Netflix - Home"} />
            <HomeHeader />
            <Section />
            <Footer halfLink={false} />
        </Box>
    )
}

export default Home