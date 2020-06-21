import React from 'react'
import styles from '../styles/sidebar.module.css'
import Logo from './logo'
import SidebarItem from './sidebar-item'
import Home from './icons/home'
import TextBody from './text-body'
import Team from './icons/team'
import Documents from './icons/documents'
import Reports from './icons/reports'
import Calendar from './icons/calendar'
import Projects from './icons/projects'

const MENU = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <Home />
  },
  {
    key: 'team',
    title: 'Team',
    icon: <Team />
  },
  {
    key: 'projects',
    title: 'Projects',
    icon: <Projects />
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: <Calendar />
  },
  {
    key: 'documents',
    title: 'Documents',
    icon: <Documents />
  },
  {
    key: 'reports',
    title: 'Reports',
    icon: <Reports />
  }
]

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Logo />
    {MENU.map(menu => (
      <SidebarItem key={menu.key}>
        {menu.icon}
        <TextBody>{menu.title}</TextBody>
      </SidebarItem>
    ))}
  </aside>
)

export default Sidebar
