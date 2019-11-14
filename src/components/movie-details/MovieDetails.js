import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

import { API_KEY } from "../../config/keys";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovie(res.data);
    };
    getMovie();
  }, [movieId]);

  const {
    title,
    poster_path,
    release_date,
    runtime,
    vote_average,
    overview,
    genres
  } = movie;

  return (
    <div>
      <Link to="/">Go home</Link>
      {movie ? (
        <div>
          {title ? <h1>{title}</h1> : <h1>Title: Unknown</h1>}
          {poster_path ? (
            <img
              src={`http://image.tmdb.org/t/p/w185${poster_path}`}
              alt="movie thumbnail"
            />
          ) : (
            <img src={""} alt="" />
          )}
          {release_date ? <h1>{release_date}</h1> : ""}
          {runtime ? <h1>{runtime}min</h1> : ""}
          {vote_average ? <h1>{vote_average}/10</h1> : ""}
          {overview ? <h1>{overview}</h1> : <h1>No description available</h1>}
          {genres ? genres.map(item => <p key={item.id}>{item.name}</p>) : ""}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default MovieDetails;
