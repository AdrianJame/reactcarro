import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Client from './pages/cadastrocliente';
import Veiculos from './pages/addcarros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Client/>}/>
        <Route path='/addcarros' element={<Veiculos/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

