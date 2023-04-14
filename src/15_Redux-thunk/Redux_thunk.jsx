import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { getuserAction } from '../reducers/userReducer';
import { useSelector } from 'react-redux';
function Redux_thunk() {
    const dispatch = useDispatch();
    const {user,isLoading,error} = useSelector((state)=>state.userReducer)
    const [username , setusername] = useState("");
    const handleChangeUsername =(evt)=>{
        setusername(evt.target.value)
    }
    const handlechange = ()=>{
        dispatch(getuserAction(username));
    }
    const RenderUser = ()=>{
        if(isLoading){
            return <h1>Loading...</h1>
        }
        if(error){
            return <h1>error</h1>
        }
        if(user){
            return (
                <div>
                    <p>{user.name}</p>
                    <p>{user.login}</p>
                </div>
            )
        }
    }
  return (
    <div>
        <h1>Find github user</h1>
        <div className='mb-3'>
            <label className='form-label'>Input Username</label>
            <input className='form-control' onChange={handleChangeUsername}></input>
        </div>  
        <button className='btn btn-primary' onClick={handlechange}>Search</button>
        {RenderUser()}
    </div>
  )
}

export default Redux_thunk