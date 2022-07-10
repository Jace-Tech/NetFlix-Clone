import { Box } from '@chakra-ui/react'
import React from 'react'
import Seo from '../components/Seo'
import Footer from '../containers/home/Footer'
import HomeHeader from '../containers/home/HomeHeader'
import Section from '../containers/home/Section'


const Home = () => {
    return (
        <Box overflowX={"hidden"}>
            <Seo title="Home" />
            <HomeHeader />
            <Section />
            <Footer />
        </Box>
    )
}

export default Home