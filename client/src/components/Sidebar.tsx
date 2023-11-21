import React from 'react';
import Logo from 'assets/imgs/logo.png'
import './Sidebar.css'

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <div className='logo-container'>
        <img src={Logo} width={40} />
        <span>OPTIMIZER</span>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="bi bi-display-fill"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-bar-chart-fill"></i>
            <span>Analytics</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-calendar-fill"></i>
            <span>Project Management</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-box-fill"></i>
            <span>Plugins</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-question-circle-fill"></i>
            <span>Help Center</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;
