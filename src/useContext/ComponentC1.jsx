import React,{useContext} from 'react'
import ComponentD from './ComponentD1.jsx'
// import { nameContext } from './ComponentA1.jsx'


const ComponentC = () => {
  // const name = useContext(nameContext)
  return (
    <div className='ComponentBox'>
        <h1>ComponentC</h1>
        <h2>{name}</h2>
        <ComponentD  />
    </div>
  )
}

export default ComponentC