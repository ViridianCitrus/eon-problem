import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './pages/Admin';
import { WatchVideo } from './pages/WatchVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/video/:id' element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;