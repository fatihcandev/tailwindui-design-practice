import React, { useState } from 'react'
import Layout from '../components/dashboard/layout'
import Sidebar from '../components/dashboard/sidebar'
import Main from '../components/dashboard/main'
import Navbar from '../components/dashboard/navbar'
import Content from '../components/dashboard/content'

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Layout>
      <Sidebar navOpen={navOpen} onClose={() => setNavOpen(false)} />
      <Main>
        <Navbar onClick={() => setNavOpen(true)} />
        <Content />
      </Main>
    </Layout>
  )
}

export default Dashboard
