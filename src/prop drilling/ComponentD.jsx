import React from 'react'

const ComponentD = (props) => {
  return (
    <div className='ComponentBox'>
        <h1>ComponentD</h1>
        <h2>{`bye 👋 ${props.name}`}</h2>
    </div>
  )
}

export default ComponentD