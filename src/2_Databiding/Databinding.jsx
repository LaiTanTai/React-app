import React from 'react'

function Databinding() {
    let msg = "hello";
    let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIkEur7wQGT7wgG5aIpjESNJwwBNXBDx9c4S2AB0ez3iQW7rr4hd_AcIz5uTBun27Dw&usqp=CAU"
    let user = {
        name : "Alice",
        email : "alice@gmail.com"
    }
  return (
    <div>
        <h1>{msg}</h1>
        <img src={imgUrl}></img>
        <p>{user.name}</p>
    </div>
  )
}

export default Databinding