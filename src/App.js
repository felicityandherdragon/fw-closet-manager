import React, { useState, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routes';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div className="p-0 m-0 bg-white w-screen h-screen grid grid-cols-8">
        <Nav />
        <main className="col-span-7">
          <Routing />
        </main>
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
