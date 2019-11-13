import React from "react";

const Movie = ({ title, poster_path }) => {
  return (
    <div>
      {poster_path == null ? (
        <img src={""} />
      ) : (
        <img src={`http://image.tmdb.org/t/p/w185${poster_path}`} />
      )}
      <p>{title}</p>
    </div>
  );
};

export default Movie;
