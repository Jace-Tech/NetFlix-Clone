import React from 'react'
import Seo from '../components/Seo'
import Footer from '../containers/home/Footer'
import HomeHeader from '../containers/home/HomeHeader'
import Section from '../containers/home/Section'


const Home = () => {
    return (
        <>
            <Seo title="Home" />
            <HomeHeader />
            <Section />
            <Footer />
        </>
    )
}

export default Home