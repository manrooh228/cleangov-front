import React from 'react';
import '../css/MapPage.css'

const MapPage = () => {
  // Координаты маркеров
  const markers = [
    { id: 1, x: "15%", y: "30%" },
    { id: 2, x: "40%", y: "50%" },
    { id: 3, x: "60%", y: "20%" },
  ];

  return (
    <div className="map-container">
      <img src={require("../img/map.jpg")} alt="City Map" className="map-image" />
      <div className="map-overlay"></div> 
      {markers.map((marker) => (
        <button
          key={marker.id}
          className="map-marker"
          style={{
            top: marker.y,
            left: marker.x,
          }}
          onClick={() => alert(`Маркер ${marker.id} был нажат!`)}
        >
          •
        </button>
      ))}
    </div>
  );
};

export default MapPage;