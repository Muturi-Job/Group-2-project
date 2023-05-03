import React, { useEffect, useState } from "react";
import ArtCard from "./ArtCard";

function ArtworksList() {
const [selectedArtwork, setSelectedArtwork] = useState(null);
const [artworks, setArtworks] = useState([]);

useEffect(() => {
fetch("https://api.artic.edu/api/v1/artworks")
.then((res) => res.json())
.then((data) => {
console.log(data);
setArtworks(data.data);
});
}, []);

const handleClick = (artwork) => {
fetch(https://api.artic.edu/api/v1/artworks/${artwork.id})
.then((res) => res.json())
.then((data) => {
setSelectedArtwork(data.data);
});
};

return (
<div
className="artworks-container"
style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
padding: "40px",
backgroundColor: "#f7f7f7",
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
className="artworks-grid"
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
gap: "30px",
maxWidth: "1200px",
}}
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
}}
onClick={() => handleClick(artwork)}
>
{artwork.thumbnail && artwork.thumbnail.lqip && (
<img
src={artwork.thumbnail.lqip}
alt={artwork.title}
className="artwork-thumbnail"
style={{ maxWidth: "100%", width: "400px", height: "400px" }}
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
fontSize: "0.9rem
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
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "10px 20px",
                border

: "none",
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
          </div>
        ))}
      </div>
      {selectedArtwork && <ArtCard artworkId={selectedArtwork.id} />}
    </div>
  );

}

export default ArtworksList;