import { useParams, Link } from "react-router-dom";
import movies from "../src/inner_assets/movies.js";
import "../src/Inner.css";

function Inner_Movies() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  
  if (!movie) {
    return <h2>Movie not found</h2>;
  }
  
  return (
    <main>
      <div className='left'>
       <img src={movie.image} alt={movie.title} />
      </div>
      <div className='right'>
        <section className="movie-inner">
          
          <h1>{movie.title}</h1>
          <span>{movie.date}</span>
          <p>{movie.plot}</p>
          <iframe src={movie.yt_url}></iframe>
          <Link to="/" className="backBtn">← Back to Homepage</Link>
        </section>
      </div>
    </main>
  );
}

export default Inner_Movies;