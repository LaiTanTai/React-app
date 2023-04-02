import React,{useState} from 'react'

function Product_Table({data,handleDelete,handleUpdate,onsubmit}) {
    const [search,setSearch] = useState("");
    const handleChange = (evt)=>{
        setSearch(evt.target.value);
    }
  return (
    <div className='table'>
    <div className='form-horizontal'>
        <div className='form-group'>
            <div className='col-sm-3 d-flex'>
                <input className='form-control' placeholder='Search' value={search} onChange={handleChange} type="text"></input>
                <button className='btn btn-outline-success ms-2' onClick={()=>onsubmit(search)}>Search</button>
            </div>
        </div>
    </div>
        <thead>
            <tr className='text-center'>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
               {data.isLoading == true && <h1>Loading...</h1>}
               {data.data.length > 0 && data.data.map((product)=>{
                    return (<tr key={product.id} className="text-nowrap">
                        <td>{product.Name}</td>
                        <td>{product.Type}</td>
                        <td>{product.Description}</td>
                        <td><img src={product.Image} width={100} height={100}></img></td>
                        <td>{product.Price}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>handleDelete(product.id)}>Delete</button>
                            <button className='btn btn-warning ms-2' onClick={()=>handleUpdate(product)}>Edit</button>
                        </td>
                    </tr>)
               })}
        </tbody>
    </div>
  )
}

export default Product_Table