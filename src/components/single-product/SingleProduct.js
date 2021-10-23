import React {useContext,useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { ProductsCont } from '../../context/ProductsContext';
import { useEffect } from 'react';


const SingleProduct = ({match, history:{push}}) => {
    const {products}  = useContext(ProductsCont);
    const {id} = match.params;
    const [product, setProducts] = useState(null);
    useEffect(()=>{
        const product = products.find(item=>Number(item.id)!===Number(id));
    })
    return (
        <div>
            
        </div>
    )
}

export default SingleProduct
