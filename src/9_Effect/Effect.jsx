import React, { useEffect, useState } from 'react'
import Child from './Child';
import Users from './Users';
// useEffect nhận vào hai tham số 
// úeEffect(callback func , arraylist dependency)
// Trên thực tế useEffect dùng để call API hoặc dùng đẻ DOM
function Effect() {
  const [count , setCount] = useState(0);
  // chạy set up đúng lần đầu tiên 
  // useEffect với các tham sô thứ hai có giá trị phụ thuộc 
  useEffect(()=>{
    console.log("effect run");
  },[count]);
  console.log("render run");
  return (
    <div>
    <h1>Effect</h1>
    <p>Count : {count}</p>
    <button onClick={()=>setCount(count+1)}></button>
    {count <= 10 && <Child count={count} />}
    <hr/>
    <Users></Users>
    </div>
  )
}

export default Effect