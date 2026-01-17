import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [showMovies, setShowMovies] = useState(false);
    const [showBooks, setShowBooks] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMoviesToggle = () => {
        setShowMovies(!showMovies);
    };

    const handleBooksToggle = () => {
        setShowBooks(!showBooks);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setShowMovies(false);
        setShowBooks(false);
    };

    return (
        <header>
            <h1>Welcome to my LOTR fan page</h1>
            
            <button 
                className={`burger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={menuOpen ? "open" : ""}>
                <span>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </span>
                
                <div 
                    className="dropdown"
                    onMouseEnter={() => setShowMovies(true)}
                    onMouseLeave={() => setShowMovies(false)}
                >
                    <span onClick={handleMoviesToggle}>Movies</span>
                    <ul className={showMovies ? "show" : ""}>
                        <li>
                            <Link to="/movie/1" onClick={closeMenu}>The Fellowship of the Ring</Link>
                        </li>
                        <li>
                            <Link to="/movie/2" onClick={closeMenu}>The Two Towers</Link>
                        </li>
                        <li>
                            <Link to="/movie/3" onClick={closeMenu}>The Return of the King</Link>
                        </li>
                    </ul>
                </div>
                
                <div 
                    className="dropdown"
                    onMouseEnter={() => setShowBooks(true)}
                    onMouseLeave={() => setShowBooks(false)}
                >
                    <span onClick={handleBooksToggle}>Books</span>
                    <ul className={showBooks ? "show" : ""}>
                        <li>
                            <Link to="/book/1" onClick={closeMenu}>The Fellowship of the Ring</Link>
                        </li>
                        <li>
                            <Link to="/book/2" onClick={closeMenu}>The Two Towers</Link>
                        </li>
                        <li>
                            <Link to="/book/3" onClick={closeMenu}>The Return of the King</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;