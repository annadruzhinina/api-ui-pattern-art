import { useEffect, useState } from "react";
import ArtList from "./ArtList.jsx";
import "./ArtList.css";

function Art(props) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/?page=66")
      .then((response) => response.json())
      .then((data) => setArtworks(data.data));
  }, []);

  return (
    <div>
      <h1 className="artwork--title">Artworks</h1>
      <ArtList artworks={artworks} />
    </div>
  );
}

export default Art;
