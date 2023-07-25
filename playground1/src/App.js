import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Playground from "./routes/Playground";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
    </>
  );
}

export default App;