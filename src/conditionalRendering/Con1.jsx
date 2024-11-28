import React from 'react'

const Con1 = (props) => {
  return (
    <div>
        <ul>
            <li>home</li>
            <li>about us</li>
            <li>contact</li>
            {
                props.login ? <li>logout</li> : <li>login</li>
            }

        </ul>
    </div>
  )
}

export default Con1