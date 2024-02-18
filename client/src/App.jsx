import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Product from './component/Product'
import { Routes,Route } from 'react-router-dom'
import Formpage from './component/Formpage'
import Dashboard from './component/Dashboard'
import Loginpage from './component/Loginpage'
import Signuppage from './component/Signup'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Product' element={<Product />} />
       <Route path='/Dashboard' element={<Dashboard />} />
       <Route path='/Formpage' element={<Formpage />} />
       <Route path='/signup' element={<Signuppage/>} />
       <Route path='/Login' element={<Loginpage/>} />
      </Routes><br />
      <Footer />
     
    </>
  )
}

export default App
