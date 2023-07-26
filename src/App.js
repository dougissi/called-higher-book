import './App.css';
import React from 'react';
import { Route, Routes, redirect } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import ResponsiveAppBar from './components/ResponsiveAppBar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ResponsiveAppBar/>
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