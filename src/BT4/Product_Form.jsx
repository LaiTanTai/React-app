import React, { useEffect, useState } from 'react'

function Product_Form({form_product,HandleSubmit}) {
    const [product,setproduct] = useState({
        Name:"",
        Type:"",
        Image:"",
        Description:"",
        Price:"",
    })
    useEffect(()=>{
        setproduct(form_product);
    },[form_product])
    const handleChange = (evt)=>{
        const {value,name} = evt.target
        setproduct({...product,[name]:value});
    }
  return (
    <div className='card'>
        <div className='card-header bg-dark text-white'>Product Form</div>
        <form className='card-body'>
            <div className="form-group">
                <label>Name</label>
                <input  className="form-control mt-2" value={product.Name} onChange={handleChange} name="Name"></input>
            </div>
            <div className="form-group">
                <label >Type</label>
                <input  className="form-control mt-2" value={product.Type} onChange={handleChange} name="Type"></input>
            </div>
            <div className="form-group">
                <label >Description</label>
                <input  className="form-control mt-2" value={product.Description} onChange={handleChange} name="Description"></input>
            </div>
            <div className="form-group">
                <label >Image</label>
                <input  className="form-control mt-2" value={product.Image} onChange={handleChange} name="Image"></input>
            </div>
            <div className="form-group">
                <label >Price</label>
                <input type="number" className="form-control mt-2" value={product.Price} onChange={handleChange} name="Price"></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3' onClick={()=>HandleSubmit(product)}>Submit</button>
                <button type='reset' className='btn btn-secondary mt-3 ms-2'>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Product_Form