import {  createHashRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./Componants/Home/Home";
import Layout from "./Componants/Layout/Layout";
import { useEffect, useState } from "react";
import DataContextProvider from "./Componants/DataContext/DataContextProvider";
import About from "./Componants/About/About";
import SmartPhones from "./Componants/SmartPhones/SmartPhones";


import ShoppingCartProvider from "./Componants/ShoppingCartContext/ShoppingCartProvider";
import CheckOut from "./Componants/CheckOut/CheckOut";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const togelDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout dakrMode={darkMode} setDarkMode={togelDarkMode} />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/smartphones", element: <SmartPhones /> },
        { path: "/check-out", element: <CheckOut /> },
      ],
    },
  ]);
  return (
    <>
      <DataContextProvider>
        <ShoppingCartProvider>
          <RouterProvider router={router} />;
        </ShoppingCartProvider>
      </DataContextProvider>
    </>
  );
}

export default App;
