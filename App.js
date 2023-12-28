import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Search from "./components/Search.jsx";
import News from "./components/News.jsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/News" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
