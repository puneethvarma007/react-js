import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
  return (
    <div className='ComponentBox'>
        <h1>ComponentC</h1>
        <ComponentD name={props.name} />
    </div>
  )
}

export default ComponentC