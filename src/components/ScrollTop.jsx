import React, { useEffect } from 'react'

const ScrollTop = ({ children }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0,  behavior: 'smooth' })
    }, [])

    return  children
}

export default ScrollTop