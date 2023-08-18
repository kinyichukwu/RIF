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

        <Route path="/a" element={<Admin />} />
        <Route path="/b" element={<HelloWasiu />} />
        <Route path="/c" element={<EasyPayTeam />} />
        <Route path="/d" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
