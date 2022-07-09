import React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo = ({ title }) => {
    return (
        <Helmet>
            <title>{ title }</title>
        </Helmet>
    )
}

export default Seo