import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./components/login";
import { Movies } from "./components/movies";
import { Signup } from "./components/signup";
import { StartPage } from "./components/start_page";
import { store } from "./store/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
