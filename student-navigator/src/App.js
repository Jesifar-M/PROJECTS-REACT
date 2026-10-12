import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Student from "./Student";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/student/:name"
          element={<Student />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;