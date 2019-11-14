import React, { useState, useEffect } from "react";

import Movie from "../movie/Movie";

import { MovieListWrapper } from "./MovieListStyle";

const MovieList = ({ movies, totalResults, currentPage, loadMore }) => {
  const [loadButton, setLoadButton] = useState(true);

  useEffect(() => {
    if (Math.ceil(totalResults) / 20 <= currentPage || totalResults <= 20) {
      setLoadButton(false);
    } else {
      setLoadButton(true);
    }
  }, [totalResults, currentPage]);

  return (
    <MovieListWrapper>
      <div className="list">
        {totalResults > 0 ? (
          movies.map(movie => <Movie key={movie.id} {...movie} />)
        ) : (
          <h1>No movies found</h1>
        )}
      </div>
      {loadButton && (
        <button onClick={() => loadMore(currentPage + 1)}>Load More</button>
      )}
    </MovieListWrapper>
  );
};

export default MovieList;
