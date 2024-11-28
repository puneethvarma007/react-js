import React, { useEffect, useState } from 'react'
import axios from "axios"

const Axios1 = () => {
  const [data,SetData]=useState([])

  useEffect(() => {
    // GetApi()
    // PostApi()
    // PutApi()
    DeleteApi() 
  },[])
  // Fetching data from API using axios
  function GetApi() {
    axios.get('https://reqres.in/api/users?page=2')
    .then((res) => {SetData(res.data.data);console.log(res)})
    .catch((err) =>console.log(err))
    
  }
  function PostApi() {
    axios.post('https://reqres.in/api/users',{
        "name": "Puneeth",
        "job": "Frontend Trainee"
      }
    )
    .then((res) =>(console.log(res)))
    .catch((err) =>console.log(err))
    
  }
  function PutApi() {
    axios.put('https://reqres.in/api/users/2',{
        "name": "Girish",
        "nickname": "Tiger 🐯 ༼ つ ◕_◕ ༽つ"
      }
    )
    .then((res) => console.log((res)))
    .catch((err) =>console.log(err))
    
  }
  function DeleteApi() {
    axios.delete('https://reqres.in/api/users/2')
    .then((res) => console.log((res)))
    .catch((err) =>console.log(err))
    
  }
  console.log('data',data);
  

  return (
    <div>
      <h1>Axios Data fetching </h1>
      {
        data.map((data)=>(
          <>
          <div className="axiosCardContainer" >
          <div className="axiosCard" >
          <img src={data.avatar} alt={data.first_name}/>
          <p>FullName:{data.first_name} {data.last_name}</p>
          <p >EmailAddress : {data.email}</p>
          </div>
          </div>
          </>
        ))
      }
    </div>
  )
}

export default Axios1