import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';


const NavBar = ({ background }) => {  
  const brand =
    'https://www.camaronbrujo.com/skin/frontend/smartwave/camaron/images/logo-camaron-header.jpg';
  
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li className="products-item">
              <Link to="/products">
                Productos <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        <Link to="/cart">
          <CartWidget />
        </Link>
          
      </div>
    </header>
  );
};

export default NavBar;
