import React,{useContext } from 'react'
import { nameContext } from './ComponentA1.jsx'
const ComponentD = () => {
  const name = useContext(nameContext)
  return (
    <div className='ComponentBox'>
        <h1>ComponentD</h1>
        <h2>{`bye 👋 ${name}`}</h2>
    </div>
  )
}

export default ComponentD