import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Playground from "./routes/Playground";
import Alex from "./routes/Alex";
import Marc from "./routes/Marc";
import Simon from "./routes/Simon";
import Andrew from "./routes/Andrew";
import Matthew from "./routes/Matthew";
import Highlights from "./routes/Highlights";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/Simon" element={<Simon />} />
        <Route path="/Marc" element={<Marc />} />
        <Route path="/Andrew" element={<Andrew />} />
        <Route path="/Alex" element={<Alex />} />
        <Route path="/Matthew" element={<Matthew />} />
        <Route path="/Highlights" element={<Highlights /> } />
      </Routes>
    </>
  );
}

export default App;