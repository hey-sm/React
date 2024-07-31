/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './globals.css'
import './tailwind.css'
import 'antd/dist/reset.css' // antd v5 引入 reset.css

ReactDOM.createRoot(document.getElementById('root')!).render(
   // <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   // </React.StrictMode>
)
