import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({
        Email:"",
        Password:""
    })
    let emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let submit=()=>{
        if(email.trim() === '' ){
            setErrors((p)=>({...p, Email:"Enter your Email"}))
        }
        else if(!emailPattern.test(email)){
            setErrors((e)=>({...e, Email:"Enter A Valid Email"}))
        }
        else{
            setErrors('')
        }
        if(password.trim() === ''){
            setErrors((e)=>({...e, Password:"Enter your password"}))
            
        }
        else if(password.trim().length<8){
            setErrors((e)=>({...e, Password:"your password should be minimum 8 characters"}))
        }
        else{
            setErrors('')
        }
        if(emailPattern.test(email) && password.trim().length>8){
            console.log('success');
            console.log(`email: ${email}\npassword: ${password}`)
        }
        
    }
    


  return (
    <>
    <div className="border w-25 mt-5 m-auto p-5">
    <h2 className="text-info text-center">Login Form</h2>
    <div className='mt-4'>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} id="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        <span className='text-danger'>{errors.Email}</span>
    </div>
    <div className='mt-4'>
        <label htmlFor="pasword">Password</label>
        <input type="password" value={password} id="pasword" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        <span className='text-danger'>{errors.Password}</span>
    </div>
    <div className='mt-4'>
        <button className='btn btn-info w-100' onClick={submit}>Login</button>
    </div>
    </div>
    </>
  )
}

export default Form