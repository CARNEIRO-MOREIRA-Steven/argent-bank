import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Connect from './Pages/Connect.jsx'
import Profil from './Pages/Profil.jsx'
import'./fontawesome.js';

//REDUX
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/se_connecter' element={<Connect />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </Provider>
)