import React, { useEffect, useState } from "react";
import "../css/App.css";
import data from "../data/train-data.json";
import Train from "./train.tsx";
import {
  APIProvider,
  Map,
  Polyline,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

type Train = {
  rt: string;
  rn: string;
  lat: string;
  lon: string;
  heading: string;
  destNm: string;
  nextStaNm: string;
  route: string;
};

function GoogleMap() {
  const position = { lat: 41.8781, lng: -87.6298 };
  const zoom = 10;
  const [trainLines, setTrainLines] = useState([
    {
      name: "Red Line",
      lit_name: "red",
      color: "#c60c30",
      visible: false,
      branches: data.Red,
    },
    {
      name: "Purple Line",
      lit_name: "p",
      color: "#522398",
      visible: false,
      branches: data.P,
    },
    {
      name: "Yellow Line",
      lit_name: "y",
      color: "#f9e300",
      visible: false,
      branches: data.Y,
    },
    {
      name: "Blue Line",
      lit_name: "blue",
      color: "#00a1de",
      visible: false,
      branches: data.Blue,
    },
    {
      name: "Pink Line",
      lit_name: "pink",
      color: "#e27ea6",
      visible: false,
      branches: data.Pink,
    },
    {
      name: "Green Line",
      lit_name: "g",
      color: "#009b3a",
      visible: false,
      branches: data.G,
    },
    {
      name: "Orange Line",
      lit_name: "org",
      color: "#f9461c",
      visible: false,
      branches: data.Org,
    },
    {
      name: "Brown Line",
      lit_name: "brn",
      color: "#62361b",
      visible: false,
      branches: data.Brn,
    },
  ]);

  const [trains, setTrains] = useState<Train[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const res = await fetch(`/api/cta-trains`);
        const data = await res.json();

        if (data.ctatt?.errCd !== "0") {
          setError(data.ctatt?.errNm || "CTA API error");
          return;
        }

        const routes = data.ctatt?.route ?? [];
        const allTrains = routes.flatMap((route: any) =>
          (route.train ?? []).map((train: any) => ({
            ...train,
            line: route["@name"],
          })),
        );

        setTrains(allTrains);
      } catch (err) {
        setError("Failed to load train positions");
      }
    };
    fetchTrains();
    const id = setInterval(fetchTrains, 30000);
    return () => clearInterval(id);
  }, []);

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
        libraries={["marker"]}
      >
        <div className="map">
          <Map
            defaultZoom={zoom}
            defaultCenter={position}
            mapId={import.meta.env.VITE_MAP_ID}
          >
            {trainLines.map(
              (val) =>
                val.visible && (
                  <>
                    {val.branches.map((branch) => (
                      <Polyline
                        path={branch}
                        strokeColor={val.color}
                        strokeOpacity={1.0}
                        strokeWeight={4}
                      />
                    ))}
                    {console.log(trains[0])}
                    {trains.map(
                      (train) =>
                        train.line === val.lit_name && (
                          <Train
                            color={val.color}
                            position={{
                              lat: Number(train.lat),
                              lng: Number(train.lon),
                            }}
                          />
                        ),
                    )}
                  </>
                ),
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}

export default GoogleMap;
