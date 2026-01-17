import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css';
import Header from "./Header";
import Movies from "./Movies_Home";
import Books from "./Books_Home";
import Inner_Movies from "./Inner_Movies"; 
import Inner_Books from "./Inner_Books";

function App() {
  return (
    <Router basename="/lotr_fan_page_react">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<Inner_Movies />} />
        <Route path="/book/:id" element={<Inner_Books />} />
      </Routes>
    </Router>
  );
}

function HomePage() { 
  return (
    <main>
      <div className='left'>
        <img src='../public/assets/Lord-Of-The-Rings-Logo.png' alt='Sticky Image' />
      </div>
      <div className='right'>
        <section id="firstText">
          <p><span>Welcome to a fan-made tribute to The Lord of the Rings.</span></p>
          <p>From the quiet fields of the Shire to the fires of Mount Doom, Middle-earth is a world shaped by ancient legends, powerful magic, and the enduring struggle between good and evil.</p>
          <p>Created by J.R.R. Tolkien and brought to life through beloved books and iconic films, The Lord of the Rings continues to inspire fans around the world with its depth, heart, and unforgettable storytelling.</p>
          <p className='disclaimer'>This site is a fan-made project created for educational purposes and is not affiliated with or endorsed by the Tolkien Estate, New Line Cinema, or Warner Bros. All rights belong to their respective owners.</p>
        </section>
        <Movies />
        <Books />
      </div>
    </main>
  );
}

export default App;