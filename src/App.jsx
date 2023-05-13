import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import Home from './components/Home/Home';
import Video from './components/Video/Video'
import Navbar from './components/Navbar/Navbar';
function App() {
 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/playlist/video/:id' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
