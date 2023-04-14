function Todos(state = {TodoList:[]},action){
    switch(action.type){
        case "add/add-todo":
            console.log(action.payload);
            return {...state,TodoList:[...state.TodoList,action.payload]};
        default:
            return state;
    }
}
export default Todos