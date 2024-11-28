import React, { useState } from 'react'
import {addTodo} from './action'
import { useDispatch } from 'react-redux';

export const TodoListApp=()=>{
  const dispatch = useDispatch()
  const [todoTitle, settodoTitle] = useState('');
  function handleClick(){
    if(todoTitle.trim()){
      const newTodo ={
        title: todoTitle
      }
      dispatch(addTodo(newTodo))
      settodoTitle('');
    }
    else if(todoTitle.trim() ==''){
      alert('please enter a todo')
    }
  }
  return (
    <div>
    <h1 className='text-info text-center'>Redux Todo List App</h1>
    <div className='container d-flex mt-5 w-50'>
        <input type='text' placeholder='Add Todo' className='form-control' value={todoTitle} onChange={(e)=>settodoTitle(e.target.value)}/>
        <button className='btn btn-info mx-3' onClick={()=>{handleClick()}}>Add ➕</button>
    </div>

  </div>
  )
}