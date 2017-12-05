import React from 'react';
import styles from './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h3>STORE HOURS</h3>
      <p>Mon - Wed: closed</p>
      <p>Thur - Sat: 10am - 4pm</p>
      <p>Sunday: 10am - 2pm</p>
      <p>or by appointment</p>
    </div>
    <div className="footer-section">
      <h3>CONTACT US</h3>
      <p>(262) 642-2277</p>
      <a href="mailto:goodsantiqueswisconsin@gmail.com?Subject=After%20Visiting%20Your%20Website..." target="_blank">goodsantiqueswisconsin@gmail.com</a>
    </div>
    <div className="footer-section">
      <h3>LOCATION</h3>
      <p>Good's Antiques</p>
      <p>3066 Main Street</p>
      <p>East Troy, WI 53155</p>
    </div>
    <div className="footer-section-social">
      <a href="https://facebook.com/goodsantiques" target="_blank">facebook</a>
      <a href="https://instagram.com/goodsantiques" target="_blank">instagram</a>
    </div>
  </footer>
)

export default Footer;
