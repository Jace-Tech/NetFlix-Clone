import React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo = ({ title, children }) => {
    return (
        <Helmet>
            <title>{ title }</title>
            { children && children }
        </Helmet>
    )
}

export default Seo