import React from 'react';
import './scss/_main.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className="headerAndMain">
          <Navbar />
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* Route 404 */}
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
