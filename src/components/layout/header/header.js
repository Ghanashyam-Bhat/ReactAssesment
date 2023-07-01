import React from 'react';
import './header.css';

import {NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><NavLink to="/q1">QUESTION 1</NavLink></li>
          <li><NavLink to="/q2">QUESTION 2</NavLink></li>
          <li><NavLink to="/q3">QUESTION 3</NavLink></li>
          <li><NavLink to="/q4">QUESTION 4</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
