import React from 'react'

function Productitem() {
  return (
    <div>
        <div classname="card h-100">
  {'{'}/* Product image*/{'}'}
  <img classname="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
  {'{'}/* Product details*/{'}'}
  <div classname="card-body p-4">
    <div classname="text-center">
      {'{'}/* Product name*/{'}'}
      <h5 classname="fw-bolder">Popular Item</h5>
      {'{'}/* Product reviews*/{'}'}
      <div classname="d-flex justify-content-center small text-warning mb-2">
        <div classname="bi-star-fill">
          <div classname="bi-star-fill">
            <div classname="bi-star-fill">
              <div classname="bi-star-fill">
                <div classname="bi-star-fill">
                </div>
                {'{'}/* Product price*/{'}'}
                $40.00
              </div>
            </div>
            {'{'}/* Product actions*/{'}'}
            <div classname="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div classname="text-center"><a classname="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
          </div>
        </div></div></div></div></div>

    </div>
  )
}

export default Productitem