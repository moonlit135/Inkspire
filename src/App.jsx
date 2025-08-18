import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Echoes from "./pages/Echoes";
import Library from './pages/Library';
import Publish from './pages/Publish';
import Writer from "./pages/Writer";
import ScrollToTop from "./components/ScrollToTop";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/echoes" element={<Echoes />} />
        <Route path="/library" element={<Library />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/writer" element={<Writer />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  )
}

export default App
