//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import HomeContainer from './components/HomeContainer';
import About from './components/About';
import Featured from './components/Featured';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <About />
      <Featured />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;