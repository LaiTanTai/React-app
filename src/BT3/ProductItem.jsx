import React from 'react'

function ProductItem({ shoesproduct,props_setstateModal}) {

  return (
    <div className='col-sm-4 btn-outline-white' style={{cursor : "pointer"}}  data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>props_setstateModal(shoesproduct)}>
        <div className='card'>
            <div className='card-body'>
                <img className='img-fluid' src={shoesproduct.image}></img>
                <div className='card-title'>{shoesproduct.name}</div>
                <div className='card-text'>{shoesproduct.price} $</div>
                <button className='btn btn-dark mt-2'>Add to cart</button>
            </div>
        </div>
    </div>    
  );
}

export default ProductItem