import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Quiz from "./pages/Quiz";
import Rituals from "./pages/Rituals";
import FarmStories from "./pages/FarmStories";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rituals" element={<Rituals />} />
          <Route path="/farms" element={<FarmStories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

