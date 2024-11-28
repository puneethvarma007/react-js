import React, { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
   const[name,setName]=useState("puneeth")
  return (
    <div className='ComponentBox'>
        <h1>ComponentA</h1>
        <h2>{`hello ${name} 👍`}</h2>
        <ComponentB name={name} />
    </div>
  )
}

export default ComponentA