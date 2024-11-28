import { createStore } from "redux";

const intialState = {
    todos: [{title:'eat breakfast',id:0}],
    nextId: 1
}

const Todo = (state=intialState,action) =>{
    switch(action.type){
    case "ADD_TODO":
        const newTodo = {id:state.nextId,title:action.payload.title};
        return{
            ...state,todos:[...state.todos,newTodo],nextId:state.nextId+1
        }
    case "EDIT_TODO":
        return{...state, todos:state.todos.map(todo=>todo.id==action.payload.id ?{...todo,title:action.payload.title}:todo)};
    case "DELETE_TODO":
            return{...state, todos:state.todos.filter(todo=>todo.id!==action.payload)};
        default:
            return intialState
    }
}

export const todoStore = createStore(Todo);