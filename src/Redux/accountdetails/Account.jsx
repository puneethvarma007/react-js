import React from 'react'
import { useSelector } from 'react-redux'

export const Account = () => {
    const data = useSelector(state=>state)
    console.log(data);
    
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
            <td>{data.account.balance}</td>
            <td>{data.account.fullName}</td>
            <td>{data.account.mobile}</td>
        </tr>
        </tbody>
      </table>

      <table className='table table-bordered w-75'>
        <thead >
          <tr>
            <th>id::</th>
            <th>Amount:</th>
            <th>Type:</th>
            <th>Date:</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((tr,index)=>(
           <tr key={index}>
              <td>{tr.id}</td>
              <td>{tr.type}</td>
              <td>{tr.amount}</td>
              <td>{tr.date.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
