import axios from "axios"
const get_user_pending= "user/get_user_pending"
const get_user_fullfilled = "user/get_user_fullfilled"
const get_user_rejected = "user/get_user_rejected"
export const getuserAction = (username)=>{
    return async (dispatch, getState) =>{
        dispatch({type:get_user_pending})
        try{
            const res = await axios.get(`https://api.github.com/users/${username}`);
            dispatch({type:get_user_fullfilled,payload:res.data})
        }catch(err){
            dispatch({type:get_user_rejected,payload:err.res.data.message})
        }
    }
}
// State
const initState ={
    user : null,
    isLoading : "false",
    error : null,
}
// Reducer
function userReducer(state = initState,action){
    switch (action.type){
        case get_user_pending:
            return {...state,isLoading:true}
        case get_user_fullfilled :
            return {...state,isLoading:false,user:action.payload}
        case get_user_pending:
            return {...state,isLoading:false,error:action.payload}
        default:
            return state
    }
}
export default userReducer