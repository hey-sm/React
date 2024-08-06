/** @format */

import React, { useEffect, useRef } from 'react'

const OlympicRings: React.FC = () => {
   const canvasRef = useRef<HTMLCanvasElement | null>(null)

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // 设置Canvas的宽度和高度
      canvas.width = 300
      canvas.height = 200

      // 定义五环的颜色
      const colors = ['#a8a8c1', '#968a8a', '#db6767ce', '#eaea6b', '#3baa3b']

      // 定义五环的位置和半径
      const rings = [
         { x: 50, y: 50, r: 30 },
         { x: 110, y: 50, r: 30 },
         { x: 170, y: 50, r: 30 },
         { x: 80, y: 80, r: 30 },
         { x: 140, y: 80, r: 30 }
      ]

      // 绘制五环
      rings.forEach((ring, index) => {
         ctx.beginPath()
         ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2)
         ctx.strokeStyle = colors[index]
         ctx.lineWidth = 5
         ctx.stroke()
      })
   }, [])

   return <canvas ref={canvasRef} />
}

export default OlympicRings
