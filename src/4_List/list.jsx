import React from 'react'

function List() {
    const template = ['a','b','c'];
    const product = [
        {id : 1, name : "I"},
        {id : 2, name : "p"},
        {id : 3, name : "c"}
    ]
    const listproduct = product.map((item)=>{
        // với mỗi phần tử trong danh sách ta thường cung cấp key đẻ mỗi phần tử trong danh sách không bị trùng lặp 
        return <li key={item.id} >{item.name}</li>
    })
  return (
    <div>
        <ul>{listproduct}</ul>
    </div>
  )
}

export default List