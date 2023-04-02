import React, { useEffect, useReducer, useState } from 'react'
import Product_Form from './Product_Form'
import Product_Table from './Product_Table'
import axios from 'axios';

function reducer(state,action){
    switch(action.type){
        case "DATA_PENDING":
            return {...state,isLoading:true};
        case "GET_DATA_SUCCESS":
            return {...state,isLoading:false,data:action.payload};
        case "GET_DATA_REJECTED":
            return {...state,isLoading:false,data:action.payload};
    }
}
function Product_Management() {
    const [state,dispatch] = useReducer(reducer,{
        data:[],
        isLoading:false,
        error:null,
    });
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct = async()=>{
        dispatch({type:"DATA_PENDING"});
        axios
        .get("https://63e867afac3920ad5beba870.mockapi.io/api/Product_Management")
        .then((res)=>{
            dispatch({type:"GET_DATA_SUCCESS",payload : res.data})
        })
        .catch((error)=>{
            dispatch({type:"GET_DATA_REJECTED" ,payload:error.error})
        })
    }
    const handleDelete = async (productID)=>{
        try{
        await axios
        .delete(`https://63e867afac3920ad5beba870.mockapi.io/api/Product_Management/${productID}`)
        fetchProduct();
        }catch(error){
            console.log(error)
        }
    }
    const [updateProduct,setupdateProduct] = useState({});
    const handleUpdate = (product)=>{
        console.log(product)
        setupdateProduct(product);
    }
    const handleSubmit = async (product)=>{
        debugger;
        try{
            const {id,...payload} = product;
            if(id){
                await axios.put(`https://63e867afac3920ad5beba870.mockapi.io/api/Product_Management/${id}`,payload);
            }else{
                await axios.post("https://63e867afac3920ad5beba870.mockapi.io/api/Product_Management",product)
            }
            fetchProduct();
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className='container-fluid'>
        <h1 className='text-center'>PRODUCT MANAGEMENT</h1>
        <Product_Form form_product={updateProduct} HandleSubmit={handleSubmit} />
        <Product_Table data={state} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default Product_Management