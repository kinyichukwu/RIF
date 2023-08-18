import { useState } from "react";
import "./appx.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import AdminNav from "./components/admin/AdminNav";
import Admin from "./pages/Admin";
import HelloWasiu from "./pages/HelloWasiu";
import EasyPayTeam from "./pages/EasyPayTeam";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/2" element={<Admin />} />
        <Route path="/3" element={<HelloWasiu />} />
        <Route path="/4" element={<EasyPayTeam />} />
        <Route path="/5" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
