import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Intro from './components/Intro/Intro.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Self from './components/Self/Self.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    // those contents are not editable then we used Layout.jsx where there function like header and footer import
    // first we make layout path  then make other path 
     <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      
      
  
      <Route path='about' element={<About />} >
      <Route path='intro' element={<Intro/>} />
      
      </Route>
      
     {/* this is way to doing nesting in react-router */}
      <Route path='contact' element={<Contact />} >
      <Route path='self' element={<Self />} />
      </Route>
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
       
    </Route>
   
     
     

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)