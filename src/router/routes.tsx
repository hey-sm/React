/** @format */

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Echarts from '@/pages/echarts'

const AppRoutes = () => (
   <Routes>
      <Route path="/" />
      <Route path="/echarts" element={<Echarts />} />
   </Routes>
)

export default AppRoutes
