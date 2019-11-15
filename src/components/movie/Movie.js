import React from "react";
import { Link } from "@reach/router";

import { MovieWrapper } from "./MovieStyle";

import NoImage from "../../img/no-image.png";

const Movie = ({ id, title, poster_path }) => {
  return (
    <MovieWrapper>
      <Link to={`/movie/${id}`}>
        <div className="content">
          {poster_path == null ? (
            <img
              className="no-image"
              src={NoImage}
              alt="placeholder thumbnail"
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w200${poster_path}`}
              alt="movie thumbnail"
            />
          )}
          <h2>{title}</h2>
        </div>
      </Link>
    </MovieWrapper>
  );
};

export default Movie;
