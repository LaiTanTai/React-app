import React from 'react'
import Productitem from './Productitem'
function Productlist() {
  return (
    <div>
    <section classname="py-5">
        <div classname="container px-4 px-lg-5 mt-5">
            <div classname="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Productitem/>
                <Productitem/>
                <Productitem/>
                <Productitem/>
                <Productitem/>
                <Productitem/>                           
                <Productitem/>
                <Productitem/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Productlist