import { configureStore } from "@reduxjs/toolkit";
import Table_seatReducer from "./reducers/Table_seat";
// Hàm reducer nhận vào hai tham số : giá trị hiện tại là state và action
// -Khi hàm reducer được chạy lần đầu tiên thì giá trị của state là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// Thông thường state là 1 object và chúng ta ko được thay đổi trực tiếp mà phải tạo object array mới để thay đổi nó 

// redux middle ware
// Ngoài ra reducer còn cho phép chia nhỏ hàm để quản lý nhiều state
const store = configureStore({
    reducer:{
        Table_seatReducer,
    }
})
// store.subcribe (call back) bất cứ khi nào giá trị 
// Mặc định configure đã có sẵn một vài middleware trong đó có redux-thunk
// Redux-thunk : redux mặc định chỉ nhận vào action là 1 plain object, middleware cho phép viết action là một function nhận vào 2 tham số là dispatch và getstate  
// dispatch là một hàm cho phép chúng ta muốn thay đối tùy theo ý muốn thông qua key type 


export default store