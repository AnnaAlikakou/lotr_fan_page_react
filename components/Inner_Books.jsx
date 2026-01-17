import { useParams, Link } from "react-router-dom";
import books from "../src/inner_assets/books.js";
import "../src/Inner.css";

function Inner_Books() {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));
  
  if (!book) {
    return <h2>Book not found</h2>;
  }
  
  return (
    <main>
      <div className='left'>
       <img src={book.image} alt={book.title} />
      </div>
      <div className='right'>
        <section className="movie-inner">
          
          <h1>{book.title}</h1>
          <span>{book.date}</span>
          <p>{book.plot}</p>
          <Link to="/" className="backBtn">← Back to Homepage</Link>
        </section>
      </div>
    </main>
  );
}

export default Inner_Books;