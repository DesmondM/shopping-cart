import React,{createContext, useState} from 'react';
import SHOP_DATA from '../shop'

export const ProductsCont =createContext();

const ProductsContext = ({children}) => {
    const [products] =useState(SHOP_DATA);
    return (
        <ProductsCont.Provider value ={{products}}>
            {
                children
            }
        </ProductsCont.Provider>
    )
}

export default ProductsContext
