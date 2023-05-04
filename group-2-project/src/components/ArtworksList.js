import React, { useEffect, useState } from "react";
import ArtCard from "./ArtCard";

function ArtworksList() {
  const [artworks, setArtworks] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.data);
      });
  }, []);

  const handleClick = (artworkId) => {
    setSelectedArtwork(artworkId);
  };

  return (
    <div
      className="artworks-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#F7F7F7",
      }}
    >
      <h1
        className="artworks-heading"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Display of Artworks
      </h1>
      <div
        className="artwork-card-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="artwork-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              maxWidth: "100%",
              margin: "10px",
              width: "calc(100% / 3 - 20px)",
            }}
          >
            {artwork.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                className="artwork-thumbnail"
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
              />
            )}
            <h2
              className="artwork-title"
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              {artwork.title}
            </h2>
            {artwork.artist_title && (
              <p
                className="artwork-artist"
                style={{
                  fontSize: "1rem",
                  fontWeight: "normal",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {artwork.artist_title}
              </p>
            )}
            {artwork.date_display && (
              <p
                className="artwork-date"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "normal",
                  marginBottom: "10px",
                  textAlign: "center",
                  }}
                  >
                  {artwork.date_display}
                  </p>
                  )}
                  <button
                  className="artwork-button"
                  style={{
                  backgroundColor: "#8B0000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  }}
                  onClick={() => handleClick(artwork.id)}
                  >
                  See Details
                  </button>
                  </div>
                  ))}
                  </div>
                  {selectedArtwork && <ArtCard artworkId={selectedArtwork} />}
                  </div>
                  );
                  }
                  
                  export default ArtworksList;
                  
                  
                  
                  
                  