import React from "react";
import { Link } from "react-router-dom";
import movies from "../src/inner_assets/movies.js";

function Movies() {
  return (
    <section id="moviesHome">
        <h2>Lord of the Rings - Movies</h2>
        <div className="text">The Lord of the Rings film trilogy brings J.R.R. Tolkien’s legendary world of Middle-earth to life through epic storytelling, breathtaking landscapes, and unforgettable characters. Directed by Peter Jackson, the films follow the perilous journey to destroy the One Ring and the struggle against the Dark Lord Sauron. Celebrated for their scale, emotion, and attention to detail, the movies remain some of the most influential fantasy films ever made, capturing the spirit of friendship, sacrifice, and hope in the face of overwhelming darkness.</div>
      {movies.map(movie => {
        const description = movie.plot.substring(0, 200) + "...";

        return (
          <div className="movie" key={movie.id} id={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <div>
            <h3>{movie.title}</h3>
            <span>{movie.date}</span>
            <p>{description}</p>
            <Link to={`/movie/${movie.id}`}>
                <button className="moreBtn">
                  <img src={`${import.meta.env.BASE_URL}assets/one-ring-to-rule-them-all.png`} alt='Ring icon' />
                  See more...
                </button>
              </Link>
            </div>          
          </div>
        );
      })}
    </section>
  );
}

export default Movies;
