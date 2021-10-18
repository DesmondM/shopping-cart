import React from 'react';
import './hero.style.scss';

const Hero = () => {
    return (
            <section class="hero is-large is-info">
                <div className="hero-body">
                <p className="title">
                    Modern items for great shopping
                 </p>
                <div className='shop-now-btn'>
                    <button className= 'button is-black' id= 'shop-now'>
                        SHOP NOW
                    </button>

                </div>
        </div>
        </section>
    )
}

export default Hero
