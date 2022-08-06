import Home from "./pages/Home";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <br />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articlelist" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}
