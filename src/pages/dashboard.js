import React from 'react'
import Layout from '../components/dashboard/layout'
import Sidebar from '../components/dashboard/sidebar'
import Main from '../components/dashboard/main'
import Navbar from '../components/dashboard/navbar'
import Content from '../components/dashboard/content'

const Dashboard = () => (
  <Layout>
    <Sidebar />
    <Main>
      <Navbar />
      <Content />
    </Main>
  </Layout>
)

export default Dashboard
