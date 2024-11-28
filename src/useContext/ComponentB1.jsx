import React,{useContext} from 'react'
import ComponentC from './ComponentC1.jsx'
// import { nameContext } from './ComponentA1.jsx'

const ComponentB = () => {
  // const name = useContext(nameContext) 
  return (
    <div className='ComponentBox'>
        <h1>ComponentB</h1>
        <h2></h2>
        <ComponentC />
    </div>
  )
}

export default ComponentB