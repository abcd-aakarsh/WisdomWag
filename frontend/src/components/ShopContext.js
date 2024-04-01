import React, {createContext, useState} from 'react';
import {Courses} from './assets/data.js';

export const ShopContext = createContext();

const getDefaultCart = () => {
    return Courses.reduce((acc, course) => {
          acc[course.id] = 0;
          return acc;
        }, {});
  };
const ShopContextProvider = (props) => {
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

    const contextValue = {Courses, cartItems, addToCart, removeFromCart}
    console.log(contextValue)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;