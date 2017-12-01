import React from 'react';
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

