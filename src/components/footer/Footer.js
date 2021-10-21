import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            {year} © Desmond's
        </div>
    )
}

export default Footer
