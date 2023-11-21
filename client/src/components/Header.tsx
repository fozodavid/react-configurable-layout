import React from 'react';
import './Header.css'
import Profile from 'assets/imgs/profile-picture-3.jpg'

const Header: React.FC = () => {
    return (
        <header className="App-header">
            <nav className="header__left">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className='btn'>
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </nav>
            <div className="header__right">
                <i className="bi bi-bell-fill"></i>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img height={40} width={40} src={Profile} alt="profile" className="profile-picture" />
                    <small style={{marginLeft: '0.4em', fontSize: 14}}>Juana F.</small>
                </div>
            </div>
        </header>
    )
}

export default Header;
