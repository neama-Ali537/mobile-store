import axios from "axios";
import React from "react";

import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();
export default function DataContextProvider(props) {
  const [data, setData] = useState([]);
  const [loading , setLoading]= useState(false);

  async function getData(callback, category = "") {
    setLoading(true);
    let response = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    );
    let mobileData = response.data.products;
   
    console.log(mobileData);

    if (category) {
      const filterData = mobileData.filter(
        (item) => item.category === category
      );
      callback(filterData);
    } else {
      callback(mobileData);
    }
    setLoading(false);

  }

  useEffect(() => {
    getData(setData);
  }, []);
  return (
    <>
      <DataContext.Provider
        value={{ data , loading}}
      >
        {props.children}
      </DataContext.Provider>
    </>
  );
}
