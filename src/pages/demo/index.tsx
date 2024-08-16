/** @format */

import React from 'react'
import { Divider, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import OlympicRings from '@/pages/demo/OlympicRings'
import FireworksCompt from '@/pages/demo/FireworksCompt'
import CanvasConfetti from '@/pages/demo/Canvas-confetti'

const App: React.FC = () => {
   const navigate = useNavigate()
   return (
      <>
         <div className="flex bg-white py-2 content-center gap-5">
            <Button onClick={() => navigate('/dev')}> 函数 </Button>
            <Button onClick={() => navigate('/dev')}> 函数 </Button>
            <Button onClick={() => navigate('/dev')}> 函数 </Button>
         </div>
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
