import React, { useRef } from 'react'

// accesing dom with use
// const Ref3 = () => {
//   const heading = useRef()
//   return (
//     <>
//       <h1 ref={heading} onClick={() => {
//         console.log(heading);
//         console.log(heading.current);
//         console.log(heading.innerHTML);
//         console.log(heading.current.innerHTML);

//       }}>heading1</h1>
//       <h1>heading2</h1>
//       <h1>heading3</h1>
//     </>
//   )
// }

//

// adding the headings in the empty array



const Ref3 = () => {
  
  let heading = useRef([])

  function changeheadingStyle(e){
    for(let ele of heading.current){
      ele.classList.remove('')
    }
    e.taget.classList.add('primary')
}
  return (
    <>
      <div>
      <h1 ref={(ele)=> {heading.current[0]=ele}} onClick={(e) => {
          changeheadingStyle(e);
      }}>heading1</h1>
      </div>
      
    </>
  )
}

export default Ref3