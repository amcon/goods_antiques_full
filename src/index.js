import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import App from './components/App/App.jsx';
import './../public/images/favicon.ico';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ), document.getElementById('root-container')
  );
});

