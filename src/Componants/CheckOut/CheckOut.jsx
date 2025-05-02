import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext/ShoppingCartProvider'

export default function CheckOut() {
  const { cartItems, getTotalPrice } = useContext(ShoppingCartContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold text-slate-700 mb-6'>CheckOut</h1>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Your Order</h2>
        {cartItems.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left text-lg font-medium text-slate-700 bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 transition duration-300 ease-in-out"
              >
                {item.brand} - {item.title}
              </button>
              {openIndex === index && (
                <div className="mt-2 px-4 text-slate-600 ">
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <img src={item.images[0]} alt={item.title} className="w-24 mt-2 rounded shadow" />
                </div>
              )}
            </div>
          ))
        )}
        <hr className='my-4' />
        <p className='text-xl font-bold'>Total: ${getTotalPrice()}</p>
      </div>
    </div>
  );
}
