import React from 'react';
import Logo from 'assets/imgs/logo.png'
import {ReactComponent as News} from 'assets/imgs/news.svg'
import SidebarStyles from './Sidebar.module.css'

const NewsContainer = () => (
  <>
    <News className={SidebarStyles["news-graphic"]} />
    <div className={SidebarStyles["news-text"]}>
      <h2>What's New?</h2>
      <mark>-Release Notes v0.2.3</mark>
    </div>
  </>
)

const LogoContainer = () => (
  <div className={SidebarStyles['logo-container']}>
    <img src={Logo} width={40} />
    <span>OPTIMIZER</span>
  </div>
)

const Sidebar: React.FC = () => {
  const sideBarLinks = [
    {
      icon: 'bi bi-display-fill',
      text: 'Dashboard',
      link: '/'
    },
    {
      icon: 'bi bi-bar-chart-fill',
      text: 'Analytics',
      link: '/analytics'
    },
    {
      icon: 'bi bi-calendar-fill',
      text: 'Project Management',
      link: '/project-management'
    },
    {
      icon: 'bi bi-box-fill',
      text: 'Plugins',
      link: '/plugins'
    },
    {
      icon: 'bi bi-question-circle-fill',
      text: 'Help Center',
      link: '/help-center'
    }
  ]

  return (
    <nav className={SidebarStyles.sidebar}>
      <div>
        <LogoContainer />
        <ul className="nav">
          {sideBarLinks.map((link, index) => (
            <li className="nav-item">
              <a className={SidebarStyles["nav-link"]} href="#">
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <NewsContainer />
    </nav>
  )
}

export default Sidebar;
