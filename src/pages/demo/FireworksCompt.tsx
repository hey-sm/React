/** @format */

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Fireworks, FireworksOptions } from 'fireworks-js'
import { Button } from 'antd'

const FireworksCompt: React.FC = () => {
   const containerRef = useRef<HTMLDivElement>(null)
   const [isFireworksActive, setIsFireworksActive] = useState(false)
   const fireworksInstance = useRef<Fireworks | null>(null)

   const options: FireworksOptions = useMemo(
      () => ({
         autoresize: true,
         opacity: 0.5,
         acceleration: 1.05,
         friction: 0.97,
         gravity: 1.5,
         particles: 50,
         traceLength: 3,
         traceSpeed: 10,
         explosion: 5,
         intensity: 30,
         flickering: 50,
         lineStyle: 'round',
         hue: {
            min: 0,
            max: 360
         },
         delay: {
            min: 30,
            max: 60
         },
         rocketsPoint: {
            min: 50,
            max: 50
         },
         lineWidth: {
            explosion: {
               min: 1,
               max: 3
            },
            trace: {
               min: 1,
               max: 2
            }
         },
         brightness: {
            min: 50,
            max: 80
         },
         decay: {
            min: 0.015,
            max: 0.03
         },
         mouse: {
            click: false,
            move: false,
            max: 1
         }
      }),
      []
   )

   useEffect(() => {
      if (containerRef.current && isFireworksActive) {
         if (!fireworksInstance.current) {
            fireworksInstance.current = new Fireworks(containerRef.current, options)
         }
         fireworksInstance.current.start()
      } else if (fireworksInstance.current) {
         fireworksInstance.current.stop()
      }

      return () => {
         if (fireworksInstance.current) {
            fireworksInstance.current.stop()
         }
      }
   }, [isFireworksActive, options])

   const handleButtonClick = () => {
      setIsFireworksActive(!isFireworksActive)
   }

   return (
      <>
         <div ref={containerRef} className="w-auto h-80 bg-slate-600" />
         <Button onClick={handleButtonClick}>
            {isFireworksActive ? 'Stop Fireworks' : 'Start Fireworks'}
         </Button>
      </>
   )
}

export default FireworksCompt
