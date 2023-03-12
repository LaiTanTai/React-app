import React, { useState } from 'react'

function Selectcar() {
  const [initial,setinitial] = useState("./img/black-car.jpg");
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8'>
        <img src={initial} alt="car" width="100%" height="auto" />
        </div>
        <div className="col-md-4">
          <ul class="list-group">
            <button onClick={()=>setinitial("./img/black-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-black.jpg" alt="icon-black" width="50px" />
              <h3 className="ms-2">Crystal Black</h3>
            </button>
            <button onClick={()=>setinitial("./img/steel-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-steel.jpg" alt="icon-steel" width="50px" />
              <h3 className="ms-2">Modern Steel</h3>
            </button>
            <button onClick={()=>setinitial("./img/silver-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-silver.jpg" alt="icon-silver" width="50px" />
              <h3 className="ms-2">Lunar Silver</h3>
            </button>
            <button onClick={()=>setinitial("./img/red-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-red.jpg" alt="icon-red" width="50px" />
              <h3 className="ms-2">Rallye Red</h3>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Selectcar