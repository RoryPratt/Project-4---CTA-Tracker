import pandas as pd
import json

trips_raw = pd.read_csv("./google_transit/trips.txt")
shapes_raw = pd.read_csv("./google_transit/shapes.txt")


def get_line(line):
    train_line_trips = trips_raw[trips_raw["route_id"] == line]
    train_line_shape_ids = train_line_trips["shape_id"].values.tolist()

    shapes_train_line = shapes_raw[shapes_raw["shape_id"].isin(train_line_shape_ids)]

    lat = shapes_train_line["shape_pt_lat"].values.tolist()
    lng = shapes_train_line["shape_pt_lon"].values.tolist()

    points = []

    for lat, lng in zip(lat, lng): points.append({"lat": lat, "lng": lng})

    return points

data = {
    "Red": get_line("Red"),
    "P": get_line("P"),
    "Y": get_line("Y"),
    "Blue": get_line("Blue"),
    "Pink": get_line("Pink"),
    "G": get_line("G"),
    "Org": get_line("Org"),
    "Brn": get_line("Brn")
}


with open("./cta-tracker/src/data/train-data.json", "w") as file:
    json.dump(data, file)