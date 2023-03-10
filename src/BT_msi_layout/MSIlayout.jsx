import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner';
import Phonelist from './Phonelist';
import Laptoplist from './Laptoplist';
import Footer from './Footer'
function MSIlayout() {
  return (
    <div className='bg-dark'>
      <Navbar/>
      <Banner/>
      <Phonelist/>
      <Laptoplist/>
      <Footer/>
    </div>
  )
}

export default MSIlayout