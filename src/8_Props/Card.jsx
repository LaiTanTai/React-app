import React from 'react'

function Card({children,onclick}) {
  return (
    <div>
        <button className='btn' onclick={onclick}>{children}</button>
    </div>
  )
}

export default Card