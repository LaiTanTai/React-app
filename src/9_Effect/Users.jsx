import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [Users , setUsers] = useState([]);
    const fetchUsers = async () => {
        try{
            const res = await axios({
                method:"GET",
                url:"https://jsonplaceholder.typicode.com/users?fbclid=IwAR3UXFXBse-g2zAIAkZrKzAfG4D7yPu4ZDLfJHr99yU4wqRT_ZY8L7ELrnw"
            })
            // Call API thành công thif set data cho state 
            setUsers(res.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchUsers();
    })
  return (
    <div>
        <h1>USERS</h1>
        <ul>
            {Users.map((user)=>{
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </div>
  )
}

export default Users