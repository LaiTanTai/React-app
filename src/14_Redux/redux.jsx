import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Redux() {
    const dispatch = useDispatch();
    // useSelector : nhận vào tham sô là 1 call backfunc nó sẽ theo dõi sự thay đối của state nếu có thì sẽ gọi lại call back func 
    // callback có tham số là 1 state của redux store
    const {count,todos} = useSelector((state)=>{
        const count = state.CountReducer.count
        const todos = state.TodosReducer.TodoList
        console.log(todos);
        return {count,todos}
    })
    // useDispatch return về dispatch func để gửi action lên store;
    // Dùng dispatch func để gửi action lên redux store
    const handleAddTodo = () => {
        const title = prompt("Input your todo:");
        const todo = {
          id: Math.floor(Math.random() * 100),
          title,
          isCompleted: false,
        };
    
        // Làm sao để them object todo vào array todos trong todoReducer
        dispatch({type:"add/add-todo",payload : todo})
    };
  return (
    <div>
    <h1>Redux</h1>
    <p>Count {count}</p>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    <hr />

      <p>Todos</p>
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo)=>{
            return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Redux