import React, { useEffect, useState } from "react";

function ArtworksList() {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setArtworks(data.data)
            });
    }, []);

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
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                        }}
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
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                marginTop: "20px",
                                textAlign: "center",
                            }}
                        >
                            {artwork.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArtworksList;
