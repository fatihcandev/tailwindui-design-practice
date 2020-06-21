import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import Navbar from '../components/navbar'
import Content from '../components/content'

export default function Index() {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <Navbar />
        <Content />
      </Main>
    </Layout>
  )
}
