import Home from "./pages/Home";
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";

export default function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articlelist" element={<ArticleList />} />
          <Route path="/article" element={<Article/>} />
        </Routes>
      </div>
    </Router>
  );
}
