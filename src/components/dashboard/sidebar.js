import React from 'react'
import styles from '../../styles/dashboard/sidebar.module.css'
import Logo from './logo'
import SidebarItem from './sidebar-item'
import Home from './icons/home'
import TextBody from './text-body'
import Team from './icons/team'
import Documents from './icons/documents'
import Reports from './icons/reports'
import Calendar from './icons/calendar'
import Projects from './icons/projects'
import ArrowRight from '../arrow'
import Url from '../url'

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
  },
  {
    key: 'original',
    title: 'See the original',
    icon: <ArrowRight />,
    href:
      'https://tailwindui.com/components/application-ui/application-shells/sidebar#component-17f40014d95a5c5bb5628b9d69558a69'
  }
]

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Logo />
    {MENU.map(menu => (
      <SidebarItem key={menu.key}>
        {menu.icon}
        {menu.key === 'original' ? (
          <Url href={menu.href} title={menu.title}>
            {menu.title}
          </Url>
        ) : (
          <TextBody>{menu.title}</TextBody>
        )}
      </SidebarItem>
    ))}
  </aside>
)

export default Sidebar
