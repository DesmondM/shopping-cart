import React from 'react'
import Layout from './shared/Layout'

const NotFound = () => {
    const style ={
        fontWeight: 'bold',
        fontSize: '48px',
        textAlign: 'center',
        color: 'red'
    }
    return (
        <Layout>
            <p style={style}>Page not found</p>
        </Layout>
    )
}

export default NotFound
