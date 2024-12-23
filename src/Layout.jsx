import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
//add outlet which takes layout as base
//where up and down contents are not change 
//but where placed <outlet/> which contents are change
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
   
    
    
    
    <Footer/>
    </>
  )
}

export default Layout
