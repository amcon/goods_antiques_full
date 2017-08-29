import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header>
    <Link to='/'>
      <h1>Good's Antiques</h1>
    </Link>
    <nav>
      <Link to='/about'>About</Link>
    </nav>
  </header>
)

export default Header;
