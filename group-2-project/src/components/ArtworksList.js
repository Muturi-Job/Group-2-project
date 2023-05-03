import React, { useEffect, useState } from "react";
function ArtworksList() {
  const [artworks, setArtworks] = useState([]);
<<<<<<< HEAD
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

=======
>>>>>>> f00ebf096a031bc70a4205f0a63f73930163d037
  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.data);
      });
  }, []);
<<<<<<< HEAD

  const handleAddToFavorites = (artwork) => {
    setFavorites([...favorites, artwork]);
  };

  const handleRemoveFromFavorites = (artwork) => {
    setFavorites(favorites.filter((favArtwork) => favArtwork.id !== artwork.id));
  };

  const isArtworkInFavorites = (artwork) => {
    return favorites.some((favArtwork) => favArtwork.id === artwork.id);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const renderArtwork = (artwork) => {
    return (
=======
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
>>>>>>> f00ebf096a031bc70a4205f0a63f73930163d037
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
          width: "calc(100% / 3 - 20px)"
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
<<<<<<< HEAD
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
        {isArtworkInFavorites(artwork) ? (
          <button
            onClick={() => handleRemoveFromFavorites(artwork)}
            style={{ backgroundColor: "#ff9800", color: "#fff", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}
          >
            Remove from favorites
          </button>
        ) : (
          <button
            onClick={() => handleAddToFavorites(artwork)}
            style={{ backgroundColor: "#2196f3", color: "#fff", padding



: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}
>
   &#9733;
Add to favorites
</button>
)}
</div>
);
};

const renderArtworks = () => {
const artworksToRender = showFavorites ? favorites : artworks;
return artworksToRender.map((artwork) => renderArtwork(artwork));
};

return (
<div>
<h1 style={{ textAlign: "center" }}>
{showFavorites ? "Favorites" : "Artworks"}
</h1>
<div style={{ display: "flex", justifyContent: "center" }}>
<button onClick={toggleFavorites} style={{ margin: "10px" , backgroundColor:"yellow" , color: "black" }}> &#9733;
{showFavorites ? "Back to Display of Artworks" : "Show Favorites"}
</button>

</div>
<div style={{ display: "flex", flexWrap: "wrap" }}>
{renderArtworks()}
</div>
</div>
);
}

export default ArtworksList;




=======
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
            {artwork.classification_title && (
              <p
                className="artwork-classification"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "normal",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {artwork.classification_title}
              </p>
            )}
            <button
              className="artwork-button"
              style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
                }}
                >
                Add to Favorites
            </button>
          </div>
                ))}
        </div>
    </div>
                );
                }
export default ArtworksList;
>>>>>>> f00ebf096a031bc70a4205f0a63f73930163d037
