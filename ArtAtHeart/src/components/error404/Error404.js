import React from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet"

import './Error404.css'
export default function Error404() {
    let history = useHistory()
    const onClick = () => {
        history.push('/')
    }
    return (
        <div className='errorPage'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 | Art At Heart</title>
            </Helmet>
            <button className='goHome' onClick={onClick}>Go Back</button>
        </div>
    )
}
