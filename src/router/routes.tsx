/** @format */

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Demo from '@/pages/demo'
import Echarts from '@/pages/echarts'
import Tailwindcss from '@/pages/tailwindcss'

const AppRoutes = () => (
   <Routes>
      <Route path="/" />
      <Route path="/demo" element={<Demo />} />
      <Route path="/tailwindcss" element={<Tailwindcss />} />
      <Route path="/echarts" element={<Echarts />} />
   </Routes>
)

export default AppRoutes
