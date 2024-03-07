import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App'; // Import your main App component

ReactDOM.render(
  <Router>
    <App /> {/* Wrap your App component with Router */}
  </Router>,
  document.getElementById('root') // Assuming you have a root div in your HTML file
);
