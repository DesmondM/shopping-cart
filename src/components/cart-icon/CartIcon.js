import React from 'react';
import ShoppingBag from '../../assets/shopping-cart.png';
import './cartIcon.styles.scss'

const CartIcon = () => {
    return (
        <div className='cart-container'>
            <img src={ShoppingBag} alt= 'shopping-cart-icon'/>
            <span className='cart-count'>5</span>
            
        </div>
    );
}

export default CartIcon
