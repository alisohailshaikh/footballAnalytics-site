import { useState } from "react";
import db from "./db.png";
import "./homeDashboard.css";

import { useEffect } from "react";

export default function HomeDashboard({ id, json }) {
  const [fetchdata, setFetchData] = useState(false);
  const [imgs, setImg] = useState([]);
  useEffect(() => {
    setImg([
      {
        index: 1,
        img1: json.Home.images.passes_completed,
        complete_normal: "Normal passes completed: " + json.Home.passes.complete.normal,
        complete_long: "Long passes completed: " + json.Home.passes.complete.long,
        complete_progressive: "Progessive passes completed: " + json.Home.passes.complete.progressive,
        complete_cutback: "Cutbacks completed: " + json.Home.passes.complete.cutback,
        complete_cross: "Crosses completed: " + json.Home.passes.complete.cross,
        img2: json.Home.images.passes_incomplete,
        incomplete_normal: "Normal passes not completed: " + json.Home.passes.incomplete.normal,
        incomplete_long: "Long passes not completed: " + json.Home.passes.incomplete.long,
        incomplete_progressive: "Progessive passes not completed: " + json.Home.passes.incomplete.progressive,
        incomplete_cutback: "Cutback not completed: " + json.Home.passes.incomplete.cutback,
        incomplete_cross: "Crosses not completed: " + json.Home.passes.incomplete.cross
      },
      {
        index: 2,
        img1: json.Home.images.receiving,
        complete_normal: "Max Pressure when received on X: " + json.Home.x_max_pressure,
        complete_long: "Max Pressure when received on Y: " + json.Home.y_max_pressure,
        img2: json.Home.images.pressure,
        incomplete_normal: "Average Pressure: " + json.Home.avg_pressure,
        incomplete_long: "Maximum Pressure Rating: " + json.Home.max_pressure,
        incomplete_progressive: "Minimum Pressure rating: " + json.Home.min_pressure,
      },
      {
        index: 3,
        img1: json.Home.images.possession,
        complete_normal: "Average X Player Position: " + json.Home.avg_x,
        incomplete_normal: "Average Y Player Position: " + json.Home.avg_y,

      },
    ]);
    setFetchData(true);
  }, [])


  if (fetchdata) {
    return (
      <div className="main-home-db">
        <div className="home-stats">
          <div className="home-count">
            {imgs[id].complete_normal}
            <br></br>
            {imgs[id].complete_long}
            <br></br>
            {imgs[id].complete_progressive}
            <br></br>
            {imgs[id].complete_cutback}
            <br></br>
            {imgs[id].complete_cross}
          </div>
          <div className="home-somethin">
            {imgs[id].incomplete_normal}
            <br></br>
            {imgs[id].incomplete_long}
            <br></br>
            {imgs[id].incomplete_progressive}
            <br></br>
            {imgs[id].incomplete_cutback}
            <br></br>
            {imgs[id].incomplete_cross}

          </div>
        </div>
        <img className="home-db-image" src={db}></img>

        {imgs[id].img2 ?
          <div className="images-tab-home">
            <img className="img-home-left" style={{ width: "450px", height: "auto" }} src={imgs[id].img1} />
            <img className="img-home-right" style={{ width: "450px", height: "auto" }} src={imgs[id].img2} />
          </div>
          :
          <div className="images-tab-home">
            <img className="akela-picture-home" style={{ width: "600px", height: "400px" }} src={imgs[id].img1} />
          </div>}
      </div>
    );
  }
  else {
    return (<div></div>)

  }
};
