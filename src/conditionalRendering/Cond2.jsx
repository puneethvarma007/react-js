import React from 'react'

const Cond2 = (props) => {
  return (
    <div>
        {
            props.condition && <h1>this is a condition component</h1>
        }
    </div>
  )
}

export default Cond2