import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import ShoppingStore from './Redux/shopping cart/ShoppingStore.jsx';
import counterStore from './Redux/counter/store.jsx'
import { accountStore } from './Redux/accountdetails/store.jsx';
import { todoStore } from './Redux/TodoListApplication/store.jsx';
import { AccountStore1 } from './Redux Toolkit/Store.jsx';
// query react
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AccountStore1}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)

