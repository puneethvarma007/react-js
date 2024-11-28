import React from 'react'
import { useSelector } from 'react-redux'

export const Account1 = () => {
    const data = useSelector(state=> state.user)
    console.log(data,'data');
    
  return (
    <div className='container'>
      <h2>User Account Details</h2>
      <table className='table table-bordered w-75'>
        <thead >
          <tr>
            <th>balance:</th>
            <th>fullName:</th>
            <th>mobile:</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>{data.balance}</td>
            <td>{data.fullName}</td>
            <td>{data.mobile}</td>
        </tr>
        </tbody>
      </table>

    </div>
  )
}
