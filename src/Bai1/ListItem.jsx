import React from 'react'
import Item from './Item'
function ListItem() {
  return (
    <div>
                <section className="pt-4">
        <div className="container px-lg-5">
            {/* Page Features*/}
            <div className="row gx-lg-5">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ListItem