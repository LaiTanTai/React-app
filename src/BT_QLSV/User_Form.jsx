import React, { useEffect, useState } from 'react'

function User_Form({onSubmit,user}) {
    const [values,setValues] = useState({
        name:"",
        Email:"",
        Address:"",
    })
    useEffect(()=>{
        setValues(user)
    },[user])
    const handleChange = (evt) => {
        const { value, name } = evt.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        const user = {...values,id: Math.floor(Math.random() * 100)};
        onSubmit(user)
        resetForm()
    }
    const resetForm = ()=>{
        setValues({
            name:"",
            Email:"",
            Address:""
        })
    }
  return (
    <form>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type="text"
            name="name"
            className="form-control"
            value={values.name}
            onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="text" name="Email"
            className="form-control"
            value={values.Email}
            onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Address</label>
            <input type="text"
            name="Address"
            className="form-control"
            value={values.Address}
            onChange={handleChange}></input>
        </div>
        <button className='btn btn-primary mb-3' onClick={handleSubmit}>Submit</button>
        <button className='btn btn-danger  mb-3' onClick={resetForm}>Reset</button>
    </form>
  )
}

export default User_Form