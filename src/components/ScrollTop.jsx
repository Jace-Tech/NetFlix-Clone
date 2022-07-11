import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const ScrollTop = ({ children }) => {
    const location = useLocation()
    
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        handleScrollTop()
    }, [location])

    return children
}

export default ScrollTop