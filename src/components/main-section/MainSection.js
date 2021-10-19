import React from 'react';
import './main-section.styles.scss';
import  shopImage from '../../assets/lion.png';
import { withRouter } from 'react-router-dom';

const MainSection = ({history}) => {
    return (
        <div className='main-section-container'>
            <div className = 'main-section-middle'>
                <div className = 'ms-m-image'>
                    <img src = {shopImage} alt = 'Lion'/>
                </div>
                <div className='ms-m-description'>
                    <h2>Great African wildlife</h2>
                    <p>Placeholder text descibing wht the picture is</p>

                    <button className='button is-black' id= 'shop-now' onClick= {()=>history.push('/product/1')}>
                        Lion Picture
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter (MainSection)
