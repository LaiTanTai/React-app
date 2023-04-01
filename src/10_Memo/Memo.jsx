import React, { useState } from 'react'
import Child from './Child'

function Memo() {
    const [count,setCount] = useState(0)
    const [ms,setMs] = useState("");
    const [Numbers , setNumbers] = useState([]);
    const handleAddNumber = ()=>{

    }
  return (
    <div>
        <h1>Memo</h1>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}></button>
        <button onClick={()=>setMs("Hello")}></button>
        <Child setMS={ms}></Child>
    </div>
  )
}

export default Memo