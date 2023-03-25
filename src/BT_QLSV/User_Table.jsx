import React from 'react'

function User_Table({users,ondelete,onselect}) {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                return(
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Address}</td>
                    <td>
                        <button className='btn btn-success mr-2' onClick={()=>onselect(user)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>ondelete(user.id)}>Delete</button>
                    </td>
                  </tr>  
                ) ;
            })}
        </tbody>
    </table>
  )
}

export default User_Table