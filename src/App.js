import React, { useState, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routes';

const App = () => {
  return (
    <Router>
      <div className="p-0 m-0">
        <header className="w-full mb-10 bg-gradient-to-b text-center p-7 from-purple-400 via-pink-500 to-red-500">
          This is the header!
        </header>
        <Routing />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
