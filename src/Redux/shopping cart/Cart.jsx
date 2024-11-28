import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart); 

  const addItemToCart = () => {
    const newItem = {
      id: Math.random(),
      name: `Item ${cartItems.length + 1}`
    };
    console.log(newItem.id);
    dispatch({ type: 'ADD_TO_CART', payload: newItem });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={addItemToCart}>Add Item</button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {console.log('itemid',item.id)}
            {item.name}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {cartItems.length}</p>
    </div>
  );
};

export default Cart;
