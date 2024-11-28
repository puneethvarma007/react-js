import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState ={
    balance:0,
    fullName: '',
    mobile: ''
}

const UserSlice = createSlice(
    {
        name: 'user',
        initialState: initialState,
        reducers: {
            deposit: (state, action) => {
                state.balance += +action.payload
            },
            withdraw: (state, action) => {
                state.balance -= action.payload
            },
            updateFullName: (state, action) => {
                state.fullName = action.payload
            },
            updateMobile: (state, action) => {
                state.mobile = action.payload
            },
            reset: () => {
                return {
                    balance: 0,
                    fullName: '',
                    mobile: ''
                }
            }
        }
    }
)
export const AccountStore1 = configureStore(
    {
        reducer: {
            user:UserSlice.reducer
        }
    }
)

export const { deposit, withdraw, updateFullName, updateMobile ,reset } = UserSlice.actions;