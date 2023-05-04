import React, { useState, useEffect } from "react";
import ArtCard from "./ArtCard";
import "./ArtCard.css";

function SearchArtwork() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [selectedArtworkId, setSelectedArtworkId] = useState(null);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleSearch = () => {
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtworks(data.data);
      });
  };

  const handleArtworkClick = (artworkId) => {
    setSelectedArtworkId(artworkId);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <button onClick={() => handleArtworkClick(artwork.id)}>
              {artwork.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedArtworkId && <ArtCard artworkId={selectedArtworkId} />}
    </div>
  );
}

export default SearchArtwork;
