import { useState,useEffect, Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Ref1  from "./useref/Ref1.jsx";
import Con1 from "./conditionalRendering/con1.jsx";
import Cond2 from "./conditionalRendering/Cond2.jsx";
import Data1 from "./two way data binding/Data1.jsx";
import Ref2 from "./useref/Ref2.jsx";
import Ref3 from "./useref/Ref3.jsx";
//custom hooks
import { UseReciveApi } from "./customhooks/useReciveApi.jsx"; 
import ComponentA from "./prop drilling/ComponentA.jsx";
import ComponentA1 from "./useContext/ComponentA1.jsx";
//memo hooks
import { TodoMemo } from "./useMemo/TodoMemo.jsx";
// import Form from "./form handling/Form.jsx";
import FormWithYup from "./form handling/yupform.jsx";
import Axios1 from "./Axios Api/Axios1.jsx";
import Axios2 from "./Axios Api/Axios2.jsx";
import Home from "./crud operations/home.jsx";
import { Create } from "./crud operations/Create.jsx";
import { Read } from "./crud operations/Read.jsx";
import { Update } from "./crud operations/Update.jsx";
// import { UseRed } from "./use reducer/UseRed.jsx";
import Counter from "./Redux/counter/counter.jsx";
import { Count } from "./conditionalRendering/count.jsx";
import Cart from "./Redux/shopping cart/Cart.jsx";
import Parent from "./reduxChildren/parent.jsx";
import { AccountForm} from "./Redux/accountdetails/AccountForm.jsx";
import { Account } from "./Redux/accountdetails/Account.jsx";
import {TodoListApp} from "./Redux/TodoListApplication/TodoListApp.jsx";
import List from "./Redux/TodoListApplication/List.jsx";
import { Account1 } from "./Redux Toolkit/Account1.jsx";
import { AccountForm1 } from "./Redux Toolkit/AccountForm1.jsx";
import InfiniteScrollQuery from "./query♾scrooling/InfiniteScroolQuery.jsx";


let login = true;
let condition = true;
const Form = lazy(()=> import("./form handling/Form.jsx"));

export const App = () => {
  let product = UseReciveApi('https://fakestoreapi.com/products/1') // one product displaying with the help of custom hooks
  let allProducts = UseReciveApi('https://fakestoreapi.com/products') // all products are displaying with the help of custom hook
  let TodoList = UseReciveApi('https://dummyjson.com/todos')
  const Products = allProducts.map((p)=>p.title)
  
   const[Lazy,SetLazy] =useState(false) 
   const[btn,setBtn] = useState('click')
 
  

  return(
    <>
      <InfiniteScrollQuery/>
      {/* <Ref1/> */}
      {/* <Ref2/> */}
      {/* <Ref3/> */}
      {/* <Data1/> */}
      {/* <Con1 login={login} />
      <Cond2 condition={condition}/> */}

      {/* {
      // one product we are rendering with the help of custom hook
        <> 
        <p>{product.id}</p>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <img src={product.image} alt={product.title} height="150px" width="150px" />
        </>
      } */}

      {/* {// all products we are rendering with the help of custom hook
        allProducts.map((p)=>{
         return<ul key={p.id}>
            <li>{p.id}</li>
            <li>{p.title}</li>
            <li>{p.description}</li>
            <li>{p.category}</li>
            <li>{p.id}</li>
            <img src={p.image} alt={p.title} height="150px" width="150px" />
          </ul>
        })
      } */}
        {/* <ComponentA/> */}
        {/* <ComponentA1/> */}
        {/* <TodoMemo products={Products}/> */}
        {/* <Form/> */}
        {/* <FormWithYup/> */}
        {/* <Axios1/> */}
        {/* <Axios2/> */}

        {/* lazy loading */}
        {/* <button className="btn btn-info " onClick={()=>{
          SetLazy(Lazy ? false : true);
        }} >{btn} </button>
        {
          Lazy && 
          <Suspense>
            <Form/>
          </Suspense>
        } */}

        {/* crud operations */}
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/read/:id" element={<Read/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
        </BrowserRouter> */}

        {/* <UseRed/> */}

        {/*redux global state management*/}
        {/* <Counter/>
        <Count/>  */}
        {/* <Cart/> */}
        {/* <Parent/> */}

        {/* account details form */}
        {/* <AccountForm/>
        <Account/> */}

        {/* redux to do list app */}
        {/* <TodoListApp/>
        <List/> */}
        
        {/* redux toolkit */}
        {/* <AccountForm1/>
        <Account1/> */}

        </>
  )
}


