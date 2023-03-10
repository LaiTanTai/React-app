import React from 'react'

function Event() {
    const click = ()=>{
        alert("Clicked");
    }
    const onchangefunc = (event)=>{
        console.log(event.target.value)
    }
    const handle = (msg)=>{
        console.log(msg)
    }
  return (
    <div>
         <button onClick={click}>Click</button>
         <input onChange={onchangefunc}></input>
         <button onClick={()=>{handle("hello")}}>click2</button>
    </div>
  )
}

export default Event