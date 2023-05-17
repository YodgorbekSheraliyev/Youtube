import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import FooterNav from "./components/Footer/FooterNav";
import { auth } from "./firebase";
import { MyContext } from "./components/Context/UseContext";

function App() {
  const {isRegister} = useContext(MyContext)
  const [user, setUser] = useState('');
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if(user){ 
            setUser(user)
          }else{
            setUser('');
          }
          return unsubscribe;
        })
      })

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === '/register') {
    }
  });
  return (
    <>
      {!isRegister && <Navbar />}
      <Routes>
        <Route path="/" element={user? <Home />: <Navigate to='/register'/>} />
        <Route path="/playlist/video/:id/:title/:info" element={<Video />}/>
        {/* <Route path="*" element={<Navigate to="/register" />} /> */}
        <Route path="/register" element={user? <Navigate to='/'/>:<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FooterNav/>
    </>
  );
}

export default App;
