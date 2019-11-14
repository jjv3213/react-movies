import React from "react";
import { Link } from "@reach/router";

const Movie = ({ id, title, poster_path }) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        {poster_path == null ? (
          <img src={""} alt="" />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w185${poster_path}`}
            alt="movie thumbnail"
          />
        )}
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Movie;
