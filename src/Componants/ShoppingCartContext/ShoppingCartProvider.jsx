import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export default function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + (product.quantity||1) }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };
  //   GET quantity
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  // increase quantity
  const increaseItemQuantity = (id, images, brand, price) => {
    setCartItems((currentItem) => {
      const exist = currentItem.find((item)=>
       item.id === id);
      if (!exist) {
        return [...currentItem,
           { id, images, brand, price, quantity: 1 }];
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, quantity:(item.quantity || 0) + 1} : item
        );
      }
    });
  };
  // decrease quantity
  const decreaseItemQuantity = (id) => {
    setCartItems((current) => {
     return current
        .map((item) =>
          item.id === id ?
        { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };
  // remove item from cart
  const removeItemFromCart = (id) => {
    setCartItems((current) => current.filter((item)=>
       item.id !== id));
  };
  //   get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item)=>
       total +item.price* item.quantity, 0);
  };
  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCart,
          getItemsQuantity,
          increaseItemQuantity,
          decreaseItemQuantity,
          removeItemFromCart,
          getTotalPrice,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
