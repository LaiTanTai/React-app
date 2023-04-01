import axios from 'axios';
import React ,{useEffect, useReducer}from 'react'
function reducer(state,action){
    switch(action.type){
      case "GET_DATA_PENDING":
        return {...state,isLoading:true};
      case "GET_DATA_SUCCESS":
        return {...state,isLoading:false,data:action.payload};
      case "GET_DATA_REJECTED":
        return {...state,isLoading:false,error:action.payload}
      default:
        return state; 
    }
}
function Usereducer() {
  const [state,dispatch] = useReducer(reducer,{
    data:[],
    isLoading:false,
    error:null,
  });
  useEffect(()=>{
    dispatch({type:"GET_DATA_PENDING"})
    axios
    .get("https://jsonplaceholder.typicode.com/photos?fbclid=IwAR38a9Gqpg4EY0SKBJFV5DfTvrezbptHAEWk0-Q13_xemZz8wdDgrocQdqI")
    .then((res)=>{
      dispatch({type:"GET_DATA_SUCCESS" , payload : res.data})
    })
    .catch((err)=>{
      dispatch({type:"GET_DATA_REJECTED",payload: err.error})
    })
  },[])
  return (
    <div>
      {state.isLoading && <h1>Loading...</h1>}
      {state.error && <h1>{state.error}</h1>}
      <ul>
        {state.data.length > 0 &&
            state.data.map((item)=>{
              return <li key={item.id}>{item.title}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Usereducer