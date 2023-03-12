import { useState } from "react"
import React from 'react'
// ueststate là một hook cưa tract dùng để tạo và quản lý state trong function component
// Khi giá trị cưa state bị thay đổi 
// Gía trị của State sẽ được giữ nguyên  
function State(){
    // useState nhận gia trị là mộ tham số mới và trả về một state trong function componennt
    // hần tử 1 : Gía trị cửa state
    // Phần tử thứ 2 : Hàm dung đổi giá trị của state
    // Lưu ý : không được phép thay đổi giá trị của state mà phải thông qua set state
    const [count , setcount] = useState(0);
    const [islogged,setislogged] = useState(false)
    const [colors ,setcolor] = useState(["red","green"])
    const handle = ()=>{
      const color = prompt("Nhap mau")
      setcolor([...colors,color])
      console.log(color);
    }
    const handleremove = ()=>{
      const color = prompt("Nhap mau");
      const newcolor = colors.filter((col)=>{
        if(col != color){
          return col;
        }
      })
      setcolor(newcolor)
    }
  return (
    <div>
        <h1>State</h1>
        <p>count : {count}</p>
        <button onClick={()=>{setislogged = false}}>increase</button>
    </div>
  )
}

export default State