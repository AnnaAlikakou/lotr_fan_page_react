import React from "react";
import { Link } from "react-router-dom";
import books from "../src/inner_assets/books.js";

function Books() {
  return (
    <section id="booksHome">
        <h2>Lord of the Rings - Books</h2>
        <div className="text">The Lord of the Rings is a timeless fantasy epic written by J.R.R. Tolkien, set in the richly imagined world of Middle-earth. Through its detailed history, languages, and mythology, the story explores themes of power, corruption, courage, and fellowship. First published in the mid-20th century, the books have inspired generations of readers and laid the foundation for modern fantasy literature, standing as one of the most important and beloved works ever written.</div>
      {books.map(book => {
        const description = book.plot.substring(0, 200) + "...";

        return (
          <div className="book" key={book.id} id={book.id}>
            <img src={book.image} alt={book.title} />
            <div>
            <h3>{book.title}</h3>
            <span>{book.date}</span>
            <p>{description}</p>
            <Link to={`/book/${book.id}`}>
                <button className="moreBtn">
                  <img src='../src/assets/one-ring-to-rule-them-all.png' alt='Ring icon' />
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

export default Books;
