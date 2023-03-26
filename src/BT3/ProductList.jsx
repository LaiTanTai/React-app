import React from 'react'
import ProductItem from './ProductItem'
function ProductList({productData,setstateModal}) {
  return (
    <div className='row'>
        <h1 className='text-center'>Shoes Shop</h1>
        {
            productData.map((product)=>{
                return (
                    <ProductItem key={product.id} shoesproduct={product} props_setstateModal={setstateModal}></ProductItem>
                );
            })
        }
    </div>
  )
}

export default ProductList