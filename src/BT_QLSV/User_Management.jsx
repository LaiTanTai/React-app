import React, { useState } from 'react'
import User_Form from './User_Form'
import User_Table from './User_Table'

function User() {
  const [Users,setUsers] = useState([{
    id:"1",
    name:"Tai",
    Email:"Tantai204.0@gmail.com",
    Address : "Cao Thắng", 
  }]);
  // state quản lý user đang được chọn 
  const [selectstate,setselectstate] = useState({});
  function Delete_user(userID){
    let newusers = Users.filter((value) =>{
      if(value.id != userID){
        return value;
      }
    })
    setUsers(newusers);
  }
  function handleSubmit(user){
    setUsers([...Users,user]);
  }
  function handleEdit(user){
    setselectstate(user);
  }
  return (
    <div className='container-fluid'>
      <h1 className='text-center text-primary'>User_Management</h1>
      <div className='card'>
          <div className='card-header bg-dark text-white'>Users Form</div>
          <div className='card-body'>
            <User_Form onSubmit={handleSubmit} user={selectstate}/>
          </div>
      </div>
      <div className='mt-4'>
      </div>
      <div className='card'>
        <div className='card-header bg-dark text-white'>User List</div>
        <div className="card-body">
          <User_Table users={Users} ondelete={Delete_user} onselectuser={handleEdit}/>
        </div>
      </div>
    </div>
  )
}

export default User