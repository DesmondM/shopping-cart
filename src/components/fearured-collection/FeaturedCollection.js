import React, {useContext} from 'react';
import {ProductsCont, ProductsContext} from '../../context/ProductsContext';
import FeaturedProduct from '../shared/FeaturedProduct';



const FeaturedCollection = () => {
    const {products} =useContext(ProductsCont);
    const productItems= products.filter((product, i)=>i<4).map(product=>(
        <FeaturedProduct {...product} key={product.id}/>
    ))
    return (
        <div>
            
        </div>
    )
}

export default FeaturedCollection
