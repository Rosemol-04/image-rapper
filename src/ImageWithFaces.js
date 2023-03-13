import React, { useState } from "react";
import "./ImageWithFaces.css";

function ImageWithFaces({ image }) {
  const [faces, setFaces] = useState([]);

  const handleImageLoad = (e) => {
    const img = e.target;
    const scaleFactor = img.width / img.naturalWidth;
    const newFaces = [
      {
        id: 1,
        x: 50 * scaleFactor,
        y: 50 * scaleFactor,
        width: 100 * scaleFactor,
        height: 100 * scaleFactor,
      },
      {
        id: 2,
        x: 250 * scaleFactor,
        y: 100 * scaleFactor,
        width: 150 * scaleFactor,
        height: 150 * scaleFactor,
      },
    ];
    setFaces(newFaces);
  };

  const handleFaceHover = (e, face) => {
    // Do something when a face is hovered over
  };

  return (
    <div className="image-container">
      <img src={image} onLoad={handleImageLoad} />
      {faces.map((face) => (
        <div
          key={face.id}
          className="face"
          style={{
            left: face.x,
            top: face.y,
            width: face.width,
            height: face.height,
          }}
          onMouseEnter={(e) => handleFaceHover(e, face)}
        />
      ))}
    </div>
  );
}

export default ImageWithFaces;
