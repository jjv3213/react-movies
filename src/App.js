import React from "react";
import { Router } from "@reach/router";

import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <MovieList path="/" />
        <MovieDetails path="/movie/:movieId" />
      </Router>
    </div>
  );
}

export default App;
