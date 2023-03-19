import React from 'react'
import data from './data.json'
import Shoesitem from './Shoesitem';
console.log("Data : ", data)
function Shoesshop() {
  return (
    <div className='container'>
        <h1 className='text-center'>Shoe</h1>
        <div className='row'>
            {data.map((item)=>{
                return(
                    <div key={item.id} className="col-sm-4">
                        <Shoesitem item={item}/>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Shoesshop