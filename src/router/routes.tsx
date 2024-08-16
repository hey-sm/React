/** @format */

import React from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'

import Demo from '@/pages/demo'
import Echarts from '@/pages/echarts'
import Tailwindcss from '@/pages/tailwindcss'
import Dev from '@/pages/dev'

const AppRoutes = () => (
   <Routes>
      <Route path="/" element={<Navigate to="/demo" />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/tailwindcss" element={<Tailwindcss />} />
      <Route path="/echarts" element={<Echarts />} />
      <Route path="/dev" element={<Dev />} />
   </Routes>
)

export default AppRoutes
