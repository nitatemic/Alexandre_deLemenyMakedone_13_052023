import React from 'react';
import './scss/_main.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import User from './components/User';
import ErrorPage from './components/ErrorPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<User />} />
          {/* Route 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
