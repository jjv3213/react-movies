import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY } from "../../config/keys";

import Movie from "../movie/Movie";
import SearchBar from "../search-bar/SearchBar";

const MovieList = () => {
  const [loadButton, setLoadButton] = useState(true);
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

  useEffect(() => {
    if (Math.ceil(totalResults) / 20 <= currentPage || totalResults <= 20) {
      setLoadButton(false);
    } else {
      setLoadButton(true);
    }
  }, [totalResults, currentPage]);

  const loadMore = async pageNumber => {
    let res = await axios.get(`${url}&page=${pageNumber}`);
    setMovies([...movies, ...res.data.results]);
    setCurrentPage(pageNumber);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {totalResults > 0 ? (
            movies.map(movie => <Movie key={movie.id} {...movie} />)
          ) : (
            <h1>No movies found</h1>
          )}

          {loadButton && (
            <button onClick={() => loadMore(currentPage + 1)}>Load More</button>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;
