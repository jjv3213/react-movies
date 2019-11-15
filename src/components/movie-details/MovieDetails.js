import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY } from "../../config/keys";
import NoImage from "../../img/no-image.png";

import { DetailsWrapper } from "./MovieDetailsStyle";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovie(res.data);
      console.log(res.data);
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
    <DetailsWrapper url={`http://image.tmdb.org/t/p/w185${poster_path}`}>
      <div className="overlay">
        {movie ? (
          <div className="content">
            {poster_path ? (
              <img
                src={`http://image.tmdb.org/t/p/w400${poster_path}`}
                alt="movie thumbnail"
              />
            ) : (
              <img src={NoImage} alt="" />
            )}
            <div className="sub-content">
              <div className="header">
                {title ? (
                  <h2 className="title">{title}</h2>
                ) : (
                  <h2 className="title">Title: Unknown</h2>
                )}
                <div className="subheading">
                  {runtime ? <p className="detail">{runtime}min</p> : ""}
                  {vote_average ? (
                    <p className="detail">{vote_average}/10</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="details">
                {overview ? (
                  <p className="overview">{overview}</p>
                ) : (
                  <p className="overview">No description available</p>
                )}
                <div className="extras">
                  {release_date ? (
                    <p className="detail">Release date: {release_date}</p>
                  ) : (
                    ""
                  )}
                  <div className="genres">
                    <p className="detail">Genres: </p>
                    {genres
                      ? genres.map(item => (
                          <p key={item.id} className="detail genre">
                            {item.name}
                          </p>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </DetailsWrapper>
  );
};

export default MovieDetails;
