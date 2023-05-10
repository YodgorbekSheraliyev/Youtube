import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import Video from './components/Video/Video'
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/video' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
