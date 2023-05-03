import React from 'react';
import './scss/_main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import User from './components/User.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/user" element={<User />} />
        {/* Route 404 */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
