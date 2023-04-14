import React from 'react'
import { useSelector } from 'react-redux'

function Xucsac() {
    const {Xucsac} = useSelector(state=>state.Baucua)
  return (
    <div className='d-flex h-100 flex-column justify-content-center align-center'>
        {Xucsac.map((img)=>{
            
        })}
    </div>
  )
}

export default Xucsac