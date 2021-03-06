import React, {useContext} from 'react'
import ProductsContext, { ProductsCont } from '../../../context/ProductsContext'
import FeaturedProduct from '../../shared/FeaturedProduct';
import Layout from '../../shared/Layout';
import './shop.styles.scss';

const Shop = () => {
    
    const {products} = useContext(ProductsCont);
    const allProducts = products.map(product=>(
        <FeaturedProduct{...product} key={product.id}/>
    ));
    return (
        <Layout>
        <div className='product-list-container'>
            <h2 className='product-list-title'>Shop</h2>
            <div className='product-list'>
                {allProducts}
            </div>
            
        </div>
        </Layout>
    )
}

export default Shop
