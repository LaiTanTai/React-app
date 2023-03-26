import React, { useState } from 'react'
import Products from './data.json'
import ProductList from './ProductList'
import  Modal  from './Modal'
function Shoesstore() {
    const [productDetail,setproductDetail] = useState({
        "name": "",
        "alias": "",
        "price": 0,
        "description": "",
        "shortDescription": "",
        "quantity": 0,
        "image": ""
    })
    function handle_productDetail(product){
        setproductDetail({
            "name": product.name,
            "alias": product.alias,
            "price": product.price,
            "description": product.description,
            "shortDescription": product.shortDescription,
            "quantity": product.quantity,
            "image": product.image,
        })
        console.log(productDetail)
    }
  return (
    <div className='container-fluid d-flex align-center'>
        <ProductList productData={Products} setstateModal={handle_productDetail}></ProductList>
        <Modal content={productDetail} ></Modal>
    </div>
  )
}

export default Shoesstore