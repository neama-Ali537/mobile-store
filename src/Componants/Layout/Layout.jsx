import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({dakrMode , setDarkMode}) {
  return <>
  <Navbar dakrMode={dakrMode} setDarkMode={setDarkMode}  />
  <Outlet></Outlet>
  <Footer />
  </>

}
