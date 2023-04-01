import React, { useEffect, useState } from 'react'

function Child({count}) {
    const [total,setTotal] = useState(2)
    // Dungf effect để đọc giá trị mới nhất của props hoặc State
    useEffect(()=>{
        setTotal(total+count);
    // Dùng giá trị mới nhất của props để thực hiện một hành động nào đó
    // ví dụ : Khiu ta có props count thay đổi và muốn dùng một total để tính toán giá trị khi count thay đôi 
    },[count])
  return (
    <div>{total}</div>
  )
}

export default Child