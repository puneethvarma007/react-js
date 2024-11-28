import { useEffect,useState } from "react"

export const  UseReciveApi = (url) => {
     let[data,setData] = useState([])

    useEffect(()=>{
        getApi()
    },[])

    const getApi = async() =>{
        let res = await fetch(url)
        let apidata = await res.json()
        setData(apidata)
    }

  return data; // important to return the data to function so it displays the data
}
