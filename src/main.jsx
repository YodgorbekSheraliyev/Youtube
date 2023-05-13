import React,{  useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route  path='*' element={<App/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
