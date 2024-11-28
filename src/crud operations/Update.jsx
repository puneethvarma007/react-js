import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Update = () => {
    const navigate = useNavigate()
    const[values,setValues] =  useState([{
        name: '',
        email: '',
        phone: '',
        website: ''
    }])
    const {id} = useParams()
    useEffect(() =>{
        axios.get('http://localhost:3000/users/' + id)
       .then((res) => {setValues(res.data)})
    },[])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put('http://localhost:3000/users/'+ id, values)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className='vh-100 m-5  d-flex justify-content-center align-items-center'>
        <div className="w-50 px-3 pt-3 pb-4 rounded bg-secondary text-light">
            <h1>Update User</h1>
            <form className='form' >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='name' className=" form-control" 
            value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' className="form-control" 
            value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})}/>
            <label htmlFor="phNo">Phone:</label>
            <input type="tel" name="phNo" id='phNo' className="form-control" 
            value={values.phone} onChange={(e)=>setValues({...values,phone:e.target.value})}/>
            <label htmlFor="website">website</label>
            <input type="url" name="website" id='website' className="form-control" 
            value={values.website} onChange={(e)=>setValues({...values,website:e.target.value})}/>
            <div className="d-flex justify-content-between">
                <button className='btn btn-success' onClick={handleSubmit}>Update</button>
                <Link to='/' className='btn btn-info'>Back To 🏠</Link>
            </div>
            </form>
        </div>

    </div>
  )
}
