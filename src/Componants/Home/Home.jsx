import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext/DataContextProvider";
import { ShoppingCartContext } from "../ShoppingCartContext/ShoppingCartProvider";

export default function Home() {
  const { data, loading } = useContext(DataContext);
  const [serchTerm, setSerchTerm] = useState("");
  const { addToCart, cartItems } = useContext(ShoppingCartContext);

  const filteredData = serchTerm
    ? data.filter((item) =>
        item.brand.toLowerCase().includes(serchTerm.toLowerCase())
      )
    : data;

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50 ">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container home text-gray-300 bg-slate-500 mx-auto p-4 shadow-md font-thin">
          <h2 className="text-4xl text-center">Online Store</h2>
          <div className="search-input">
            <label className="text-xl" htmlFor="searchInput">
              Search your favorite phone
            </label>
            <input
              value={serchTerm}
              onChange={(e) => setSerchTerm(e.target.value)}
              className="m-3 p-1 rounded-lg outline-none text-gray-950"
              type="text"
              placeholder="Search..."
              id="searchInput"
            />
          </div>
          <div className="mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg-zinc-800 bg-transparent shadow-md p-4 rounded-lg">
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                const quantity =
                  cartItems.find((cartItem) => cartItem.id === item.id)
                    ?.quantity || 0;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center rounded-xl bg-gray-300 border p-4 shadow-lg transition duration-300 hover:shadow-xl dark:bg-transparent w-full"
                  >
                    <img
                      className="h-40 rounded-sm mb-2 object-cover"
                      src={item.images[0]}
                      alt={item.brand}
                    />
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                      {item.brand}
                    </p>
                    <p className="text-md text-gray-700 dark:text-gray-300">
                      {item.rating}
                    </p>
                    <p className="text-lg text-gray-900 dark:text-gray-300">
                      {item.price.toFixed()}$
                    </p>
                    {quantity === 0 ? (
                      <button
                        className="mt-2 px-4 py-2 bg-gray-100 hover:bg-purple-100 dark:bg-gray-50 dark:hover:bg-gray-300 rounded-md font-semibold text-cyan-950 dark:text-black"
                        onClick={() => addToCart(item)}
                      >
                        Add To Cart
                      </button>
                    ) : null}
                  </div>
                );
              })
            ) : (
              <div className=
              "text-center text-xl text-gray-900 font-bold  flex justify-center items-center fixed inset-0">
                No items found.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
