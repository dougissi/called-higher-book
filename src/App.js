import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Resources from './Resources';
import FAQ from './FAQ';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/sticks">Resources</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/sticks' element={<Resources/>} />
          <Route path='/faq' element={<FAQ/>} />
        </Routes>
      </div>
    );
  }
}

export default App;