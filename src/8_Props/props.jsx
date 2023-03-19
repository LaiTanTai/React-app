import React from 'react'
import Welcome from './Welcome'
import Card from './Card'
function Props() {
  let user= {
    name : "Bob",
  }
  const handleClick = ()=>{
    alert("click")
  }
  return (
    <div>
      <h1>Props</h1>
      <Welcome name="John"/>
      <Welcome name={user.name}/>
      {/* children */}
      <Card onclick={handleClick}>
        <h3>hello</h3>
      </Card>
    </div>
  )
}

export default Props