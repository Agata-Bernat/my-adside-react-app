import React from 'react';
import HomeContainer from './HomeContainer';
import About from './About';
import Featured from './Featured';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <Route path = "/About">
        <About />
      </Route>
      <Route path = "/Featured">
      <Featured />
      </Route>
      <Route path = "/Portfolio">
      <Portfolio />
      </Route>
      <Route path = "/Blog">
      <Blog />
      </Route>
      <Route path = "/Contact">
      <Contact />
      </Route>
    </div>
  );
}

export default App;