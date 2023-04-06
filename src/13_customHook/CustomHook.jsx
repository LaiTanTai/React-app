import React, { useEffect } from 'react'
import { useState } from 'react'
import useCounter from './useCounter';
import axios from 'axios';
import useWindowSize from './useWindowSize';
import useRequest from './useRequest'
function CustomHook() {
    // const [count , setcount] = useState(0);
    // const increase = ()=>useState(count++);
    
    const {count,increase,decrease} = useCounter();
    const size = useWindowSize();
    const [Todos,setTodos] = useState([]);
    const fetchTodos = async ()=>{
        try{
            const {data} = await axios.get();
            setTodos(data);
        }catch(error){
            console.log(error);
        }
    }
    const fetchData= async()=>{
        const {data} = await axios.get();
        return data;
    }
  return (
    <div>
    <h1>CustomHook</h1>
    <p>Count : {count}</p>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    {size.width >= 768 && <h1>SideBar</h1>}
    </div>
  )
}

export default CustomHook