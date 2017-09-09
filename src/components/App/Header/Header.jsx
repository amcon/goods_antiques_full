import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header>
    <Link to='/'>
      <div className="logo"></div>
    </Link>
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/store'>Store</Link>
      <Link to='/shows'>Shows</Link>
      <Link to='/map'>Map</Link>
      <Link to='/admin'>Admin</Link>
    </nav>
  </header>
)

export default Header;
