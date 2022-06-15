import React from "react";
import {  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/Main.js'
import Mentor from './pages/Mentor.js'
import Judges from './pages/Judges.js'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/judges" element={<Judges />} />
      <Route path="/mentor" element={<Mentor />} />
    </Routes>
  </BrowserRouter>
  );
}
