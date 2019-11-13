import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";

import { API_KEY } from "./config/keys";

import MovieList from "./components/movie-list/MovieList";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      let res;
      setLoading(true);
      if (searchTerm) {
        res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
        );
        setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
        );
      } else {
        res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      }
      setLoading(false);
      setMovies([...res.data.results]);
      setTotalResults(res.data.total_results);
    };
    getMovies();
  }, [searchTerm]);

  const loadMore = async pageNumber => {
    let res = await axios.get(`${url}&page=${pageNumber}`);
    setMovies([...movies, ...res.data.results]);
    setCurrentPage(pageNumber);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar handleChange={handleChange} />
      <Router>
        <MovieList
          path="/"
          loading={loading}
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
