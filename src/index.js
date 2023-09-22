import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Connect from './Pages/Connect.jsx'
import Profil from './Pages/Profil.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/se_connecter' element={<Connect />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)