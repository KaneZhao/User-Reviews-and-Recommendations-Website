import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

// Leaflet Marker Icon Fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const BusinessMap = ({ position, full_address, city, state }) => {
  // Latitude and Longitude
  //const { latitude, longitude } = position;
  const handleGetDirections = () => {
    const destination = `${position[0]},${position[1]}`; // Lat,Long format
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, "_blank"); // Opens Google Maps with directions in a new tab
  };

  return (
    <div>
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
            <button onClick={handleGetDirections} style={{ marginTop: "10px" }}>
              Get Directions
            </button>
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <p className="address">
              <strong>Address:</strong> {full_address.replace("\n", ", ")}
            </p>
            <p className="location">
              <strong>Location:</strong> {city}, {state}
            </p>
          </Grid>
          <Grid size={6}>
            <Button
              variant="outlined"
              onClick={handleGetDirections}
              color="black"
              style={{ marginTop: "20px", textTransform: "none" }}
            >
              Get Directions
            </Button>
          </Grid>
        </Grid>

        {/* <button
          onClick={handleGetDirections}
          style={{
            padding: "10px 20px",
            // background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Directions
        </button> */}
      </div>
    </div>
  );
};

export default BusinessMap;
