import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";

import { API_KEY } from "./config/keys";

import MovieList from "./components/movie-list/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setMovies([...res.data.results]);
      setTotalResults(res.data.totalResults);
    };
    getMovies();
  }, []);

  const loadMore = async pageNumber => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
    );
    setMovies([...movies, ...res.data.results]);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Router>
        <MovieList
          path="/"
          movies={movies}
          loadMore={loadMore}
          currentPage={currentPage}
          totalResults={totalResults}
        />
      </Router>
    </div>
  );
}

export default App;
