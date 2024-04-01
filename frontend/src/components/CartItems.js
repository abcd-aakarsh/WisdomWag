import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import './CartItems.css';
import remove_icon from './assets/cart_cross_icon.png';

export const CartItems = () => {
  const { Courses, cartItems, removeFromCart } = useContext(ShopContext);

  const totalPrice = Object.values(cartItems).reduce(
    (acc, quantity) => {
      if (quantity > 0) {
        const coursePrice = Courses.find(course => course.id === quantity)
          ?.price_inr;
        return acc + (coursePrice || 0); 
      }
      return acc;
    },
    0
  );

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Course</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
      {Courses.map((course) => (
        cartItems[course.id] > 0 && (
          <div key={course.id}>
            <div className='cartitems-format cartitems-format-main'>
              <img
                src={course.image_url}
                alt=''
                className='carticon-product-icon'
              />
              <p>{course.title}</p>
              <p>
                {Courses.find(c => c.id === course.id)[`price_inr`]}
              </p>
              <img
                className='cartitems-remove-icon'
                src={remove_icon}
                onClick={() => removeFromCart(course.id)}
                alt=''
              />
            </div>
          </div>
        )
      ))}
      <p>Total: {totalPrice}</p>
    </div>
  );
};
