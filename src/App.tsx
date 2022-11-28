import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./components/login";
import { Movies } from "./components/movies";
import { Signup } from "./components/signup";
import { StartPage } from "./components/start_page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
