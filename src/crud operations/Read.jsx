import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Read = () => {
    const {id} = useParams()
    const[user,setUser] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    },[])
  return (


        <div className='vh-100 m-5  d-flex justify-content-center align-items-center'>
        <div className="w-50 px-3 pt-3 pb-4 rounded bg-secondary text-light">
            <h1>User Details</h1>
        <form className='form'>
            <strong>Name: {user.name}</strong>
            <strong>Email: {user.email}</strong>
            <strong>Phone: {user.phone}</strong>
            <strong>WebSite: {user.website}</strong>
            <Link to={`/update/${id}`} type='button' className='btn btn-success'>Edit</Link>
            <Link to='/' type='button' className='btn btn-info'>Back</Link>
        </form>

        </div>
        </div>
  )
}
