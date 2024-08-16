/** @format */

/** @format */

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Routes from '@/router/routes.js'
const { Header, Content, Footer, Sider } = Layout
const siderStyle: React.CSSProperties = {
   overflow: 'auto',
   height: '100vh',
   position: 'fixed',
   insetInlineStart: 0,
   top: 0,
   bottom: 0,
   scrollbarWidth: 'thin',
   scrollbarColor: 'unset'
}
const items = [
   {
      key: '/demo',
      label: <Link to={'/demo'}>demo</Link>
   },
   {
      key: '/tailwindcss',
      label: <Link to={'/tailwindcss'}>tailwindcss</Link>
   },
   {
      key: '/echarts',
      label: <Link to={'/echarts'}>echarts</Link>
   }
]

const App: React.FC = () => {
   const location = useLocation()
   return (
      <Layout>
         <Sider style={siderStyle}>
            <Menu
               mode="inline"
               selectedKeys={[location.pathname]}
               theme={'light'}
               items={items}
               className="bg-slate-100 h-full"
            />
         </Sider>
         <Content style={{ marginInlineStart: 200, background: '#fff' }}>
            <Routes />
         </Content>
      </Layout>
   )
}

export default App
