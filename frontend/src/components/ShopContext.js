import React, {createContext, useState, useEffect} from 'react';
import {Courses} from './assets/data.js';

export const CartContext = createContext();

const getDefaultCart = () => {
    return Courses.reduce((acc, course) => {
          acc[course.id] = 0;
          return acc;
        }, {});
  };
const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
      if (!cartItems.hasOwnProperty(itemId) || cartItems[itemId] === 0) {
        setCartItems((prevCart) => ({
          ...prevCart,
          [itemId]: 1,
        }));
      }
    };
  
    const removeFromCart = (itemId) => {
      if (cartItems[itemId] > 0) {
        setCartItems((prevCart) => ({
          ...prevCart,
          [itemId]: prevCart[itemId] - 1,
        }));
      }
    };


    // const getCartTotal = () => {
    //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // };

    // useEffect(() => {
    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // }, [cartItems]);
  
    // useEffect(() => {
    //   const cartItems = localStorage.getItem("cartItems");
    //   if (cartItems) {
    //     setCartItems(JSON.parse(cartItems));
    //   }
    // }, []);

    const contextValue = {Courses, cartItems, addToCart, removeFromCart}

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default ContextProvider;