import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./components/Player";
import Banner_video from "./components/Banner_video";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/banner-vid" element={<Banner_video />} />
      </Routes>
    </div>
  );
};

export default App;
