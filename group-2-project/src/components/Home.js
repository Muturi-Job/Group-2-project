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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artworks">Artworks List</Link>
          </li>
          <li>
            <Link to="/search">Search Artworks</Link>
          </li>
          <li>
            <Link to="/ArtCard">Art</Link>
          </li>
        </ul>
      </nav>

      <header >
        {/* <h1></h1> */}
        
      </header>

      <Routes>
        <Route exact path="/" />
        <Route path="/artworks" component={ArtworksList} />
        <Route path="/search" component={SearchArtworks} />
        <Route path="/artcard" component={ArtCard} />
      
      </Routes>
     {/* <ArtworksList />  */}
    </div>
    </Router>
  );
};
export default Home;