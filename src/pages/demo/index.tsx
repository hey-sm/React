/** @format */

import React from 'react'
import { Divider } from 'antd'
import OlympicRings from '@/pages/demo/OlympicRings'
import FireworksCompt from '@/pages/demo/FireworksCompt'
import CanvasConfetti from '@/pages/demo/Canvas-confetti'

const App: React.FC = () => {
   return (
      <>
         <OlympicRings />
         <Divider className="bg-slate-300 h-1" />
         <FireworksCompt />
         <Divider className="bg-slate-300 h-1" />
         <CanvasConfetti />
         <Divider className="bg-slate-300 h-1" />
      </>
   )
}
export default App
