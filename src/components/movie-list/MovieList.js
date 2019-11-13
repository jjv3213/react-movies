import React, { useState, useEffect } from "react";

import Movie from "../movie/Movie";

const MovieList = ({ movies, loadMore, currentPage, totalResults }) => {
  const [displayButton, setDisplayButton] = useState(true);

  useEffect(() => {
    if (totalResults / 20 === currentPage) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [currentPage, totalResults]);

  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
      {displayButton && (
        <button onClick={() => loadMore(currentPage + 1)}>Load More</button>
      )}
    </div>
  );
};

export default MovieList;
