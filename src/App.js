import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Content from "./components/ui/Content";
import Footer from "./components/ui/Footer";

import "./css/style.css";

const App = () => {
  return (
    <div className="layout">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
