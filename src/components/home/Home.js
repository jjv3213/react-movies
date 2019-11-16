import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY } from "../../config/keys";

import SearchBar from "../search-bar/SearchBar";
import MovieList from "../movie-list/MovieList";

import { HomeWrapper } from "./HomeStyle";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("Popular");

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [searchTerm]);

  const getMovies = async () => {
    setLoading(true);
    let res;
    if (searchTerm) {
      res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      setSelectedGenre("");
    } else {
      res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      setSelectedGenre("Popular");
    }
    handleSetMovies(res);
  };

  const handleSetMovies = res => {
    setLoading(false);
    setMovies([...res.data.results]);
    setTotalResults(res.data.total_results);
  };

  const getGenres = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    setGenres([{ id: 0, name: "Popular" }, ...res.data.genres]);
  };

  const loadMore = async pageNumber => {
    let res = await axios.get(`${url}&page=${pageNumber}`);
    setMovies([...movies, ...res.data.results]);
    setCurrentPage(pageNumber);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleGenre = async (id, name) => {
    setLoading(true);
    setSearchTerm("");
    setSelectedGenre(name);
    if (id === 0) {
      getMovies();
    } else {
      let res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
      );
      setUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
      );
      handleSetMovies(res);
    }
  };

  return (
    <HomeWrapper>
      <SearchBar handleChange={handleChange} />

      <div className="genres">
        {genres &&
          genres.map(genre => {
            let className = "genre-btn";
            if (genre.name === selectedGenre) {
              className += " selected";
            }
            return (
              <button
                className={className}
                key={genre.id}
                onClick={() => handleGenre(genre.id, genre.name)}
              >
                {genre.name}
              </button>
            );
          })}
      </div>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MovieList
          movies={movies}
          totalResults={totalResults}
          currentPage={currentPage}
          loadMore={loadMore}
        />
      )}
    </HomeWrapper>
  );
};

export default Home;
