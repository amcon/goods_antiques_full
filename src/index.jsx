import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';

document.addEventListener('DOMContentLoaded', function() {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ), document.getElementById('root-container')
  );
});
