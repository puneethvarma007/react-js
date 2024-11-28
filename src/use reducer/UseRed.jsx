import React, { useReducer } from "react";

// export const UseRed = () => {
//   const update = (prev, curr) => {
//     console.log("prev:", prev, "curr:", curr);
//     return prev + curr;
//   };
//   const [count, dispatch] = useReducer(update, 0);
//   return (
//     <div className="d-flex mt-5 justify-content-center">
//       <button onClick={() => dispatch(1)} className="btn btn-dark m-3">
//         ➕
//       </button>
//       <p className="m-3">counter:{count}</p>
//       <button onClick={() => dispatch(-1)} className="btn btn-dark m-3">
//         ➖
//       </button>
//     </div>
//   );
// };

// reducer types in dispacth
// export const UseRed = () => {
//   const update = (_, curr) => {
//     if (curr.type == "INC") return _ + 1;
//     else if (curr.type == "DEC") return _ - 1;
//     else if (curr.type == "RESET") return 0;
//     else return count;
//   };

//   const [count, dispatch] = useReducer(update, 0);
//   return (
//     <div className="d-flex mt-5 justify-content-center">
//       <button
//         onClick={() => dispatch({ type: "INC" })}
//         className="btn btn-dark m-3"
//       >
//         ➕
//       </button>
//       <p className="m-3">counter:{count}</p>
//       <button
//         onClick={() => dispatch({ type: "DEC" })}
//         className="btn btn-dark m-3"
//       >
//         ➖
//       </button>
//       <button
//         onClick={() => dispatch({ type: "RESET" })}
//         className="btn btn-danger m-3"
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// reducer types and payload in dispatch
// export const UseRed = () => {
//   const update = (_, curr) => {
//     // if(curr.type=='INC')
//     //     return _+curr.payload;
//     // else if(curr.type=='DEC')
//     //     return _-curr.payload;
//     // else if(curr.type=='RESET')
//     //     return curr.payload;
//     // else return count

//     switch (curr.type) {
//       case "INC":
//         return _ + curr.payload;
//       case "DEC":
//         return _ - curr.payload;
//       case "RESET":
//         return curr.payload;
//       default:
//         return _;
//     }
//   };

//   const [count, dispatch] = useReducer(update, 0);
//   return (
//     <div className="d-flex mt-5 justify-content-center">
//       <button
//         onClick={() => dispatch({ type: "INC", payload: 5 })}
//         className="btn btn-dark m-3"
//       >
//         ➕
//       </button>
//       <p className="m-3">counter:{count}</p>
//       <button
//         onClick={() => dispatch({ type: "DEC", payload: 5 })}
//         className="btn btn-dark m-3"
//       >
//         ➖
//       </button>
//       <button
//         onClick={() => dispatch({ type: "RESET", payload: 0 })}
//         className="btn btn-danger m-3"
//       >
//         Reset
//       </button>
//     </div>
//   );
// };
