/** @format */

/** @format */

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Routes from '@/router/routes.js'

const { Header, Content, Footer } = Layout

const items = [
   {
      key: '1',
      label: <Link to={'/demo'}>demo</Link>
   },
   {
      key: '2',
      label: <Link to={'/echarts'}>echarts</Link>
   }
]

const App: React.FC = () => {
   return (
      <Layout>
         <Header className="p-0">
            <Menu mode="horizontal" defaultSelectedKeys={['2']} theme={'light'} items={items} />
         </Header>
         <Content>
            <Routes />
         </Content>
      </Layout>
   )
}

export default App
