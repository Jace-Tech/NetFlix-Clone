import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const ScrollTop = ({ children }) => {
    const location = useLocation()

    const handleScrollTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        handleScrollTop()
    }, [location])

    return children
}

export default ScrollTop