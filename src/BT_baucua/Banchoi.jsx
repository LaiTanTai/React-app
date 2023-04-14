import React from 'react'
import { useSelector } from 'react-redux'
import Cuoc from './Cuoc';
function Banchoi() {
    const { danhsachcuoc } = useSelector((state)=>state.Baucua);
  return (
    <div className="row">
        {danhsachcuoc.map((item) => {
            return (
            <div key={item.ma} className="col-4">
                <Cuoc item={item}/>
            </div>
            );
        })}
    </div>
  )
}

export default Banchoi