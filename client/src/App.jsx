import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Product from './component/Product'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
       <Route path='/Home' element={<Home />} />
       <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
