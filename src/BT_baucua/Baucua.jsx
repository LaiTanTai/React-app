import React from 'react'
import Banchoi from './Banchoi'
import Xucsac from './Xucsac'
import { useSelector } from 'react-redux'
function Baucua() {
    const {tongdiemcuoc} = useSelector((state)=>state.Baucua)
  return (
    <div style={{minHeight:"100vh"}} className='container-fluid bg-dark'>
        <h1 className='text-danger text-center'>BÀI TẬP BẦU CUA</h1>
        <div className='text-center'></div>
        <div className="row">
        <div className="col-12 text-center">
          <div className="text-center mt-5">
            <span
              className="p-3 bg-warning"
              style={{
                fontSize: 25,
                borderRadius: 10,
                border: "5px solid rgb(0, 0, 0)",
              }}
            >
              Tiền thưởng: <span className="text-success">{tongdiemcuoc}</span>
            </span>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-8'>
              <Banchoi/>
        </div>
        <div className='col-4'>
  
        </div>
      </div>
    </div>
  )
}

export default Baucua