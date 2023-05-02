import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import ArtworksList from './ArtworksList';
import SearchArtworks from './SearchArtwork';
import ArtCard from './ArtCard';



function Home()  {
  return (
    <Router>
    <div>
      <nav className='menu'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/artworks">ARTWORKS</Link>
          </li>
          <li>
            <Link to="/search">SEARCH</Link>
          </li>
          <li>
            <Link to="/ArtCard">ART</Link>
          </li>
        </ul>
      </nav>

      <header >        
      </header>
        
      <Routes>
        <Route exact path="/" />
        <Route path="/artworks" component={ArtworksList} />
        <Route path="/search" component={SearchArtworks} />
        <Route path="/artcard" component={ArtCard} />
      </Routes>
    </div>
    </Router>
  );
};

export default Home;
