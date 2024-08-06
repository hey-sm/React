/** @format */

import React, { useCallback } from 'react'
import confetti from 'canvas-confetti'

const ConfettiButton: React.FC = () => {
   const handleConfetti = useCallback(() => {
      confetti({
         particleCount: 100,
         startVelocity: 30,
         spread: 360,
         origin: {
            x: 0.5, // 相对于 canvas 宽度的中心位置
            y: 0.5 // 相对于 canvas 高度的中心位置
         },
         colors: ['#ff0000', '#00ff00', '#0000ff']
      })
   }, [])

   return <button onClick={handleConfetti}>Click me for confetti!</button>
}

export default ConfettiButton
