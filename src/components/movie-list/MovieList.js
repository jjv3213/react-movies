import React, { useState, useEffect } from "react";

import Movie from "../movie/Movie";

const MovieList = ({ movies, loadMore, currentPage, totalResults }) => {
  const [loadButton, setLoadButton] = useState(true);

  useEffect(() => {
    if (Math.ceil(totalResults) / 20 <= currentPage || totalResults <= 20) {
      setLoadButton(false);
    } else {
      setLoadButton(true);
    }
  }, [totalResults, currentPage]);

  return (
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
  );
};

export default MovieList;
