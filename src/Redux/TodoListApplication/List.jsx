import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const List = () => {
    const state = useSelector((state)=>state.todos)
    {console.log(state)}
  return (
    <ul className='list-group mt-5'>
        {state.map(todo => (
            <Todo key={todo.id} id={todo.id} title={todo.title}/>
        ))}
  
    </ul>
  )
}

export default List

