import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB1.jsx'

export const nameContext = createContext() // 1st we need to create a context 
// afer that we need to provide our nameContext to our child so it can access directly without prop drilling 
const ComponentA1 = () => {
   const[name,setName]=useState("puneeth")
  return (
    <div className='ComponentBox'>
        <h1>ComponentA</h1>
        <h2>{`hello ${name} 👍`}</h2>
        <nameContext.Provider value={name}> 
        <ComponentB />
        </nameContext.Provider>
        
    </div>
  )
}

export default ComponentA1