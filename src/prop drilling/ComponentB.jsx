import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
  return (
    <div className='ComponentBox'>
        <h1>ComponentB</h1>
        <ComponentC name={props.name}/>
    </div>
  )
}

export default ComponentB