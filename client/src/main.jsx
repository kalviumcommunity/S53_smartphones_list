import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import AppProvider from '../Context/Parentcontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
  <ChakraProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </AppProvider>
)
