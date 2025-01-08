/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;

const MoviesCard = ({ movie, showLink = true }) => {
  return (
    <>
      <div className="movie-card">MoviesCard</div>
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes do Filme </Link>}
    </>
  );
};

export default MoviesCard;
