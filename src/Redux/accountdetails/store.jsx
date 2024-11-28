import { useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: '',
  mobile: '',
};

const accountReducer = (state = initialState, action) => {
    //if statements
//   if (action.type == "deposit")
//     return { ...state, balance: state.balance + action.payload };
//   else if (action.type == "withdraw")
//     return { ...state, balance: state.balance - action.payload };
//   else if (action.type == "update_fullname")
//     return { ...state, fullName: action.payload };
//   else if (action.type == "update_mobile")
//     return { ...state, mobile: action.payload };
//   else return state;

    //switch
    switch (action.type) {
      case "deposit":
        return {...state, balance: state.balance +  +action.payload };
      case "withdraw":
        return {...state, balance: state.balance -  action.payload };
      case "update_fullname":
        return {...state, fullName: action.payload };
      case "update_mobile":
        return {...state, mobile: action.payload };
        case 'reset' :
          return initialState;
      default :
        return state;
    }
};
const transactionReducuer = (state = [], action) =>{
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state,{
        id:action.payload.id,
        type:action.payload.type,
        amount:action.payload.amount,
        date:new Date()
      }];
      case 'RESET':
        return [];
    default:
      return state;
  }
}

const CombineReducer = combineReducers({
  account: accountReducer,
  transactions: transactionReducuer,
})

// dispatch({ type: "deposit", payload: 1000 });
// dispatch({ type: "withdraw", payload: 1000 });

export const accountStore = createStore(CombineReducer);

// console.log(accountStore.getState());
// accountStore.dispatch({ type: "deposit", payload: 1000 });
// console.log(accountStore.getState());

// accountStore.dispatch({ type: "withdraw", payload: 500 });
// console.log(accountStore.getState());

// accountStore.dispatch({ type: "update_fullname", payload: "Puneeth Varma" });
// console.log(accountStore.getState());

// accountStore.dispatch({ type: "update_mobile", payload: "7702297463" });
// console.log(accountStore.getState());

