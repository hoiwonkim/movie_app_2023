import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// function Movie({ id, year, title, summary, poster }) {
//   return <h4>{title}</h4>;
// function Movie({ year, title, summary, poster, genres }) {
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    // //   <div class="movie">
    //   <div className="movie">
    //     <img src={poster} alt={title} title={title} />
    //     {/* <div class="movie__data">
    //       <h3 class="movie__title">{title}</h3>
    //       <h5 class="movie__year">{year}</h5>
    //       <p class="movie__summary">{summary}</p> */}
    //       <div className="movie__data">
    //     <h3 className="movie__title">{title}</h3>
    //     <h5 className="movie__year">{year}</h5>
    //     {/* <ul className="genres"> */}
    //     <ul className="movie__genres">
    //       {genres.map((genre, index) => (
    //         <li key={index} className="genres__genre">
    //           {genre}
    //         </li>
    //       ))}
    //     </ul>
    //     {/* <p className="movie__summary">{summary}</p> */}
    //     <p className="movie__summary">{summary.slice(0, 180)}...</p>
    // <Link to={{
    //     pathname: "/movie-detail",
    //     state: {
    //       year,
    //       title,
    //       summary,
    //       poster,
    //       genres,
    //     },
    //   }}
    // >
    //   <div className="movie">
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      {/* </div> */}
      {/* </div> */}
    {/* </Link> */}
    </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
