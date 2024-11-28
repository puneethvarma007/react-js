import React,{useEffect, useRef,useState} from "react";

// it maximum the number of repetations with use state.
// export const Ref1 = () =>{
//     const [count,updateCount] = useState(0)
//     useEffect(()=>{
//         updateCount((c)=> c+1);
//     })
//     return(
//         <>
//             {count}
//         </>
//     )
// }

// with use ref the value doesnt changes when it re renders in the ui
// export const Ref1 = () =>{
//     const count = useRef(0)
//     useEffect(()=>{
//         count.current = count.current + 1;
//         console.log(count.current);
//         console.log(count)
        
//     })
//     return(
//         <>
//             {count.current}
//         </>
//     )
// }

// example when the use ref side effect incriments when we are entering a text in the input field.
// export const Ref1 = () =>{
//     const count = useRef(0)
//     const [input,updateInput] = useState('')
//     useEffect(()=>{
//         count.current = ++count.current;
//         // console.log(count.current);
        
//     })
//     return(
//         <>
//             <input 
//             type="text"
//             value={input}
//             onChange={(e)=>{updateInput(e.target.value) ; console.log(e)}}/>
//             {count.current}
//             <p>{input}</p>
//         </>
//     )
// }

// dom manipulation with the help of use ref
// export const Ref1 = () =>{
//     const inputRef = useRef()
//     useEffect(()=>{
    
//         inputRef.current.focus();
//         inputRef.current.style.backgroundColor = "yellow";
        
//     })
//     return(
//         <>
//             <input 
//             type='text' ref={inputRef} />
            
//         </>
//     )
// }

// export default Ref1;


import { useSelector } from "react-redux";

const Ref1 = () => {
    const count = useSelector((state) => state.count)
  return (
    <h2>ref counter:{count}</h2>
  )
}

export default Ref1