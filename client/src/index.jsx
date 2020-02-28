import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MediaProvider } from './context';
import './styles.css';

ReactDOM.render(
  <Router>
    <MediaProvider>
      <App />
    </MediaProvider>
  </Router>,
  document.getElementById('root')
);
