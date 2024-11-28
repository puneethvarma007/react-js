import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, reset, updateFullName, updateMobile, withdraw } from "./action";

export const AccountForm = () => {
  const [amount, setAmount] = useState(''); // this is used for input field in form
  const [name, setName] = useState(''); // this is used for input field in form
  const [number, setNumber] = useState(''); // this is used for input field in form
  const [TransatctionId, setTransactionId] = useState(0); 
  let dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Form</h2>
      <div className="row ">
        <div className=" col-4">
          <input
            className="form-control m-1"
            type="number"
            placeholder="Enter an amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="btn btn-info col-1 m-1"
          onClick={() => {
            dispatch(deposit(amount));
            setTransactionId(TransatctionId + 1);
            dispatch({type:'ADD_TRANSACTION', 
              payload:{
              id:TransatctionId,
              amount: amount,
              date: new Date(),
              type:'Deposit'
            }})
            // { type: "deposit", payload: amount }
            setAmount('');
          }}
        >
          Deposit
        </button>
        <button
          className="btn btn-warning col-1 m-1"
          onClick={() => {
            dispatch(withdraw(amount));
            setTransactionId(TransatctionId + 1);
            dispatch({type:'ADD_TRANSACTION', payload:{
              id:TransatctionId,
              amount: amount,
              date: new Date(),
              type:'Withdraw'
            }})
            console.log('withdraw');
           
            
            // { type: "withdraw", payload: amount }
            setAmount('');
          }}
        >
          Withdraw
        </button>
      </div>

      <div className="row mt-1">
        <div className=" col-4">
          <input
            className="form-control m-1"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="btn btn-info col-1 m-1"
          onClick={() => {
            dispatch(updateFullName(name));



            // { type: "update_fullname", payload:name}
            setName('');
          }}
        >
          update
        </button>
      </div>  

      <div className="row mt-1">
        <div className=" col-4">
          <input
            className="form-control m-1"
            type="number"
            placeholder="Enter Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button
          className="btn btn-info col-1 m-1"
          onClick={() => {
            dispatch(updateMobile(number));
            // { type: "update_mobile", payload:number}
            setNumber('');
          }}
        >
          update
        </button>
      </div>  

      <button
          className="btn btn-danger col-2 m-1"
          onClick={() => {
            dispatch(reset())
            dispatch({type:'RESET'})
            // {type:'reset'}
          }}>
            Reset
      </button>
    </div>
  );
};
