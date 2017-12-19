import React from 'react';
import styles from './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <div className="home-info">
      <h1>VISIT OUR SHOWROOM TODAY</h1>
      <p>3066 Main Street<br />East Troy, WI 53155<br />(262) 720-1416</p>
      <Link to='/store' className="serif">GALLERY</Link>
    </div>
  </div>
)

export default Home;
