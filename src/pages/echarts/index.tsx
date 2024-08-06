/** @format */
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Echarts: React.FC = () => {
   const chartRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (chartRef.current) {
         // 基于准备好的dom，初始化echarts实例
         const myChart = echarts.init(chartRef.current)
         // 绘制图表

         const option = {
            title: {
               text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
               data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
               {
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
               }
            ]
         }
         myChart.setOption(option)

         // 在组件卸载时销毁图表
         return () => {
            myChart.dispose()
         }
      }
   }, [])

   return (
      <>
         <div ref={chartRef} className="w-1/2 h-screen"></div>
      </>
   )
}

export default Echarts
