import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet Marker Icon Fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MyMap = ({ position }) => {
  // Latitude and Longitude
  //const { latitude, longitude } = position;

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "100%" }}
    >
      {/* TileLayer is used to display the map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker at the given latitude and longitude */}
      <Marker position={position}>
        <Popup>
          A marker at the given location. <br /> Latitude: {position[0]},
          Longitude: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
