
import { configureStore } from "@reduxjs/toolkit";
// Hàm reducer nhận vào hai tham số : giá trị hiện tại là state và action
// -Khi hàm reducer được chạy lần đầu tiên thì giá trị của state là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// Thông thường state là 1 object và chúng ta ko được thay đổi trực tiếp mà phải tạo object array mới để thay đổi nó 
function Count(state = { count : 1 },action){
    switch(action.type){
        case "increment":
            return {...state,count : state.count + 1};
        case "decrement":
            return {...state,count : state.count - 1};
        default:
            return state;
    }
}
function Todos(state = {TodoList:[]},action){
    switch(action.type){
        case "add/add-todo":
            console.log(action.payload);
            return {...state,TodoList:[...state.TodoList,action.payload]};
        default:
            return state;
    }
}
// Ngoài ra reducer còn cho phép chia nhỏ hàm để quản lý nhiều state
const store = configureStore({
    reducer:{
        CountReducer:Count,
        TodosReducer:Todos,
    }
})
// store.subcribe (call back) bất cứ khi nào giá trị 
store.subscribe(()=>{
    console.log("Gía trị state của store  : ",store.getState());
})
// dispatch là một hàm cho phép chúng ta muốn thay đối tùy theo ý muốn thông qua key type 
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});

export default store