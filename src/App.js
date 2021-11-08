import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MainNavigation from "./Components/Navigation/MainNavigation";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
