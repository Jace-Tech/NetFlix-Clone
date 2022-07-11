import React, { useEffect } from 'react'

const ScrollTop = ({ children }) => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, left: 0,  behavior: 'smooth' })
    }

    useEffect(() => {
        const handler = window.addEventListener('scroll', handleScrollTop, { once: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return  children
}

export default ScrollTop