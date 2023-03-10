import React from 'react'

function banner() {
  return (
    <div>
      <div className="carousel-inner">
  <div className="carousel-item">
    <img src="./img/slide_1.jpg" alt="Los Angeles" width="100%" height={500} />
  </div>
  <div className="carousel-item active">
    <img src="./img/slide_2.jpg" alt="Chicago" width="100%" height={500} />
  </div>
  <div className="carousel-item">
    <img src="./img/slide_3.jpg" alt="New York" width="100%" height={500} />
  </div>
</div>

    </div>
  )
}

export default banner