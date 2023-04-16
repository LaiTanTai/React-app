import React from 'react'
import Table_Seat from './Table_Seat'
import BookTable from './BookTable'
function Home_page() {
  return (
      <div  style={{backgroundImage:'linear-gradient(to right bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.9)),url("./img/bgmovie.jpg")',height:"100vh",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className='row container-fluid'>
          <div className='col-8'>
            <h1 className='text-center text-warning'>ĐẶT GHẾ XEM PHIM</h1>
            <h4 className='text-center text-light'>Màn Hình</h4>
            <Table_Seat></Table_Seat>
          </div>
          <div className='col-4'>
            <h2 className='text-light text-center mb-5 mt-3'>DANH SÁCH GHẾ BẠN CHỌN</h2>
            <div className='mb-1'>
              <button className='border-warning btn btn-warning text-warning'>x</button>
              <span className='text-light' style={{fontSize:'20px'}}>Ghế đã đặt</span>
            </div>
            <div className='mb-1'>
              <button className='border-warning btn btn-success text-success'>x</button>
              <span className='text-light' style={{fontSize:'20px'}}>Ghế đang chọn</span>
            </div>
            <div className='mb-1'>
              <button className='border-warning btn btn-light text-light'>x</button>
              <span className='text-light' style={{fontSize:'20px'}}>Ghế chưa đặt</span>
            </div>
            <BookTable></BookTable>
          </div>
        </div>
      </div>
  )
}

export default Home_page