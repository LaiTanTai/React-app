// component bản chất là một function return về một JSX mô tả giao diện sẽ được hiển thị 
// JSX : javascript + XML cho phép viết html trong javascript 
// vì JSX là bản chất jsx trong javascript nên có một số cú pháp trong html bị thay đổi 
// class -> className
// for -> htmlFor
// - các thuộc tính ở snake-case sẽ được chuyển thành camelcase
// + tab-index = tabIndex
import "./Welcome.css"
function Welcome(){
    return (
        <div className="title">
            <p>hello react</p>
        </div>
    )
}
// Ngoài ra ta có thể tạo component bằng class , tuy nhiên hiện nay cách này khá ít được sử dụng 
// import React from "react";
// class Welcome extends React.createElement{
//     render(){
//         return (
//             <div>
//                 <h1>Helo</h1>
//             </div>
//         )
//     }
// }
export default Welcome