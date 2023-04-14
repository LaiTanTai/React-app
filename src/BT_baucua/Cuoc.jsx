import React from 'react'
import {useDispatch} from 'react-redux'
import { tangcuoc,giamcuoc } from '../reducers/BaucuaReducer';

function Cuoc({item}) {
    const dispatch = useDispatch();
    const imgsrc = `./img/${item.ma}.png`;
  return (
    <div>
        <div className="text-center mt-5">
      <img
        src={imgsrc}
        style={{ width: 250 }}
      />
      <br />
      <br />
      <span
        className="p-3 pl-5 pr-5 bg-warning mt-2"
        style={{ borderRadius: "5%", fontSize: 25 }}
      >
        Cược:
        <button className="btn btn-success ml-2 mr-2" onClick={()=>dispatch(tangcuoc(item.ma))}  style={{ fontSize: 20 }}>
          +
        </button>
        <span className="text-success">{item.diemCuoc}</span>
        <button className="btn btn-success ml-2 mr-2" onClick={()=>dispatch(giamcuoc(item.ma))} disabled={item.diemCuoc == 0} style={{ fontSize: 20 }}>
          -
        </button>
      </span>
    </div>
    </div>
  )
}

export default Cuoc