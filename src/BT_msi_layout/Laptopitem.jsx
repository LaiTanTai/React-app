import React from 'react'

function Laptopitem() {
  return (
    <div>
      <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src="./img/lt_lenovo.png" alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">LENOVO THINKPAD</h4>
            <p className="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
    </div>
  )
}

export default Laptopitem