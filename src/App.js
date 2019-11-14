import React from "react";
import { Router } from "@reach/router";

import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";
import Navbar from "./components/navbar/Navbar";

import { GlobalStyle } from "./global/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Router>
        <Home path="/" />
        <MovieDetails path="/movie/:movieId" />
      </Router>
    </div>
  );
}

export default App;
