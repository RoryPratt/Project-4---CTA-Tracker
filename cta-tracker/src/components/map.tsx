import React, { useEffect, useState } from "react";
import "../css/App.css";
import data from "../data/train-data.json";
import {
  APIProvider,
  Map,
  Polyline,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function GoogleMap() {
  const position = { lat: 41.8781, lng: -87.6298 };
  const zoom = 10;
  const [trainLines, setTrainLines] = useState([
    {
      name: "Red Line",
      color: "#c60c30",
      visible: false,
      path: data.Red,
    },
    {
      name: "Purple Line",
      color: "#522398",
      visible: false,
      path: data.P,
    },
    {
      name: "Yellow Line",
      color: "#f9e300",
      visible: false,
      path: data.Y,
    },
    {
      name: "Blue Line",
      color: "#00a1de",
      visible: false,
      path: data.Blue,
    },
    {
      name: "Pink Line",
      color: "#e27ea6",
      visible: false,
      path: data.Pink,
    },
    {
      name: "Green Line",
      color: "#009b3a",
      visible: false,
      path: data.G,
    },
    {
      name: "Orange Line",
      color: "#f9461c",
      visible: false,
      path: data.Org,
    },
    {
      name: "Brown Line",
      color: "#62361b",
      visible: false,
      path: data.Brn,
    },
  ]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {trainLines.map((val, i) => (
          <div className="form-check form-check-inline" key={i}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              onChange={() => {
                setTrainLines((prev) =>
                  prev.map((item, index) =>
                    index === i ? { ...item, visible: !item.visible } : item,
                  ),
                );
              }}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {val.name}
            </label>
          </div>
        ))}
      </div>
      <APIProvider
        apiKey={import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <div className="map">
          <Map
            defaultZoom={zoom}
            defaultCenter={position}
            mapID={import.meta.env.VITE_MAP_ID}
          >
            {trainLines.map(
              (val) =>
                val.visible && (
                  <Polyline
                    path={val.path}
                    strokeColor={val.color}
                    strokeOpacity={1.0}
                    strokeWeight={4}
                  />
                ),
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}

export default GoogleMap;
