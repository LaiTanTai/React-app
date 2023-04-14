
import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./slices/countSlide";
import Todos from "./reducers/TodosReducer";
import Baucua from "./reducers/BaucuaReducer";
import userReducer from "./reducers/userReducer";
// Hàm reducer nhận vào hai tham số : giá trị hiện tại là state và action
// -Khi hàm reducer được chạy lần đầu tiên thì giá trị của state là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// Thông thường state là 1 object và chúng ta ko được thay đổi trực tiếp mà phải tạo object array mới để thay đổi nó 

// redux middle ware

const Middleware = (store) => (next) => (action) =>{
    console.log("loggerMiddleware",action);
    next(action)
}
const asyncMiddleware = (store) => (next) => (action) =>{
    if(typeof action == "function"){
        return action(store.dispatch,store.getState)
    }
    next(action)
}
// Ngoài ra reducer còn cho phép chia nhỏ hàm để quản lý nhiều state
const store = configureStore({
    reducer:{
        CountReducer,
        TodosReducer:Todos,
        Baucua:Baucua,
        userReducer,
    },
    middleware : [Middleware,asyncMiddleware]
})
// store.subcribe (call back) bất cứ khi nào giá trị 
store.subscribe(()=>{
    console.log("Gía trị state của store  : ",store.getState());
})
// Mặc định configure đã có sẵn một vài middleware trong đó có redux-thunk
// Redux-thunk : redux mặc định chỉ nhận vào action là 1 plain object, middleware cho phép viết action là một function nhận vào 2 tham số là dispatch và getstate  
// dispatch là một hàm cho phép chúng ta muốn thay đối tùy theo ý muốn thông qua key type 
function fetchData(dispatch,getState){
    setTimeout(()=>{
        dispatch({type:"Get data success",payload : "OK"})
    },5000)
}

export default store