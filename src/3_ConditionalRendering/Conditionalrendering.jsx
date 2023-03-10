import React from 'react'

function Conditionalrendering() {
    // thể hiện đăng nhập hay chưa
    let logged = false;
    let content = null;
    let isactive = false;
    if(logged){
        content = "Welcome to cyber"
    }else{
        content = "Login to cyber"
    }
  return (

    <div>
        {content}
        {/* 3 ngôi */}
        {isactive ? <h1>active</h1> : <h1>unactive</h1>}
    </div>
  )
}

export default Conditionalrendering