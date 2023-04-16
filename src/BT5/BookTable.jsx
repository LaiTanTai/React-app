import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
function BookTable() {
    const dispatch = useDispatch();
    const {isBooking } = useSelector((state)=>state.Table_seatReducer)
  return (
    <table className='table p-0 '>
        <thead>
            <tr className='text-light'>
                <th className='border border-light' scope='col'>Số ghế</th>
                <th className='border border-light' scope='col'>Giá</th>
                <th className='border border-light' scope='col'>Hủy</th>
            </tr>
        </thead>
        <tbody>
            {
                isBooking.map((value)=>{
                    return <tr className='text-warning border border-light'>
                        <td className='border border-light'>{value}</td>
                        <td className='border border-light'>150.000</td>
                        <td className='border border-light'><button onClick={()=>dispatch({type:'Seat/delete',payload:value})} className='btn btn-danger'>x</button></td>
                    </tr>
                })
            }
        </tbody>
        <tfoot>
            <tr className='text-light'>
                <th className='border border-light' scope='col'>Tổng tiền</th>
                <th className='border border-light' scope='col'>{(isBooking.length*150000).toLocaleString('vn-VN', {
                        style: 'currency',
                        currency: 'VND',
                })}</th>
                <th className='border border-light' scope='col'><button onClick={()=>dispatch({type:'Seat/Booked'})} className='btn btn-warning text-dark'>Đặt</button></th>
            </tr>
        </tfoot>
    </table>
  )
}

export default BookTable