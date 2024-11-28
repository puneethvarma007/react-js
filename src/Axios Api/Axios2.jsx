import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Axios2 = () => {
    const[data,SetData] = useState([])
    useEffect(() => {
        // FetchApi();
        // Axios();
        CrudAxios()
    }, [])
    // regular fetch 
    const FetchApi = async () => {
       let res = await fetch('https://fakestoreapi.com/products')
       let data = await res.json();
       console.log(res);
       console.log(data);
    }
    // axios fetch
    // const Axios = async () => {
    //     let res = await axios.get('https://fakestoreapi.com/products')
    //    let data = res.data;
    //    console.log(res);
    //    console.log(data);
       
    // }
    // crud axios
    const Api = axios.create({
        baseURL: 'https://fakestoreapi.com',
        // timeout: 5000
        // // headers: {'X-Custom-Header': 'foobar'}
      });
    const CrudAxios = async () => {
        let getres = await Api.get('/products')
        console.log('getres',getres);

        let postres = await Api.post('/products', {
            title: 'New Product',
            price: 19.99,
            category: 'Electronics'
        })
        console.log('postres',postres);

        let putres = await Api.put('/products/1', {
            title: 'Updated Product',
            price: 29.99,
            category: 'Electronics'
        })
        console.log('putres',putres);

        let deleteres = await Api.delete('/products/21')
        console.log('deleteres', deleteres);
    }
    return (
        <div>
        </div>
    )
}

export default Axios2