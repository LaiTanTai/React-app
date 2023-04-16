import React from 'react'
import Seat from './Seat'
import './SCSS/Table_seat.scss'
import { useSelector , useDispatch } from 'react-redux'
function Table_Seat() {
    const dispatch = useDispatch();
    const {isBooking,isBooked} = useSelector((state)=>state.Table_seatReducer)
    const rows = ['1', '2', '3', '4','5','6','7','8','9','10','11','12'];
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L"];
  return (
    <table className='table'>
        <thead>
            <tr>
                <th scope='col'></th>
                {
                    rows.map((values)=>{
                        return <th className='text-warning text-center' scope='col'>{values}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
                {
                    columns.map((colvalues)=>{
                        return  <tr>
                            <th className='text-warning text-center' scope='row'>{colvalues}</th>
                            {
                                rows.map((rowvalues)=>{
                                    if(isBooking.includes(colvalues+rowvalues)){
                                        return <td className='text-center'>
                                        <button onClick={()=>dispatch({type:'Seat/Booking',payload:colvalues+rowvalues})} disabled={true} className='btn btn-outline-warning bg-success text-dark' >{rowvalues}</button>
                                    </td> 
                                    }else if(isBooked.includes(colvalues+rowvalues)){
                                        return <td className='text-center'>
                                        <button onClick={()=>dispatch({type:'Seat/Booking',payload:colvalues+rowvalues})} className='btn btn-outline-warning bg-warning text-dark' disabled={true}>{rowvalues}</button>
                                    </td> 
                                    }else{
                                        return <td className='text-center'>
                                            <button onClick={()=>dispatch({type:'Seat/Booking',payload:colvalues+rowvalues})} className='btn btn-outline-warning bg-light text-dark'>{rowvalues}</button>
                                        </td>
                                    }
                                })
                            }    
                        </tr>
                    })
                }
        </tbody>
    </table>
  )
}

export default Table_Seat