import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Create = () => {
    const navigation = useNavigate()
    const[user,setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/users/', user)
            navigation('/')
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
    <div className='vh-100 m-5  d-flex justify-content-center align-items-center'>
        <div className="w-50 px-3 pt-3 pb-4 rounded bg-secondary text-light">
            <h1>Add A User</h1>
            <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='name' className=" form-control" 
            onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' className="form-control" 
            onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <label htmlFor="phNo">Phone:</label>
            <input type="tel" name="phNo" id='phNo' className="form-control" 
            onChange={(e)=>setUser({...user,phone:e.target.value})}/>
            <label htmlFor="website">website</label>
            <input type="url" name="website" id='website' className="form-control" 
            onChange={(e)=>setUser({...user,website:e.target.value})}/>
            <div className="d-flex justify-content-between">
                <button className='btn btn-success '>Add ➕</button>
                <Link to='/' className='btn btn-info'>Back To 🏠</Link>
            </div>
            </form>
        </div>

    </div>
    </>
  )
}
