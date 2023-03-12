import React from 'react'
import Child from './child'
import "./style.css"
import styles from "./style.module.css"
function Style() {
  return (

    <div style={{ backgroundColor:"red"}}>
    
    
    <h1>style</h1>

    {/* css */}
    <h1 className='title'>tai</h1>
    <Child/>
    {/* CSS module */}
    <h1 className={styles.heading}>Heloo</h1>
    </div>
  )
}

export default Style;