import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-100 text-[#f8fafc] relative overflow-x-hidden">
      {/* 0-Lag GPU Ambient Background */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;