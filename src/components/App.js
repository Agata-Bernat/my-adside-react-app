import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import About from './About';
import Featured from './Featured';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import { Route } from 'react-router-dom';


function App() {
  const [pages, setPages] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/pages').then(response => response.json()).then(data => setPages(data))
  }, []); 
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
      <Blog content = {pages[0]}/>
      </Route>
      <Route path = "/Contact">
      <Contact />
      </Route>
    </div>
  );
}

export default App;