import { useState } from "react";
import db from "./db.png";
import "./awayDashboard.css";
import { useEffect } from "react";

export default function HomeDashboard({ id, json }) {
  const [fetchdata, setFetchData] = useState(false);
  const [imgs, setImg] = useState([]);
  useEffect(() => {
    setImg([
      {
        index: 1,
        img1: json.Away.images.passes_completed,
        complete_normal: "Normal passes completed: " + json.Away.passes.complete.normal,
        complete_long: "Long passes completed: " + json.Away.passes.complete.long,
        complete_progressive: "Progessive passes completed: " + json.Away.passes.complete.progressive,
        complete_cutback: "Cutbacks completed: " + json.Away.passes.complete.cutback,
        complete_cross: "Crosses completed: " + json.Away.passes.complete.cross,
        img2: json.Away.images.passes_incomplete,
        incomplete_normal: "Normal passes not completed: " + json.Away.passes.incomplete.normal,
        incomplete_long: "Long passes not completed: " + json.Away.passes.incomplete.long,
        incomplete_progressive: "Progessive passes not completed: " + json.Away.passes.incomplete.progressive,
        incomplete_cutback: "Cutback not completed: " + json.Away.passes.incomplete.cutback,
        incomplete_cross: "Crosses not completed: " + json.Away.passes.incomplete.cross
      },
      {
        index: 2,
        img1: json.Away.images.receiving,
        complete_normal: "Max Pressure when received on X: " + json.Away.x_max_pressure,
        complete_long: "Max Pressure when received on Y: " + json.Away.y_max_pressure,
        img2: json.Away.images.pressure,
        incomplete_normal: "Average Pressure: " + json.Away.avg_pressure,
        incomplete_long: "Maximum Pressure Rating: " + json.Away.max_pressure,
        incomplete_progressive: "Minimum Pressure rating: " + json.Away.min_pressure,
      },
      {
        index: 3,
        img1: json.Away.images.possession,
        complete_normal: "Average X Player Position: " + json.Away.avg_x,
        incomplete_normal: "Average Y Player Position: " + json.Away.avg_y,

      },
    ]);
    setFetchData(true);
  }, [])


  if (fetchdata) {
    return (
      <div className="main-away-db">
        <div className="away-stats">
          <div className="away-count">
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
          <div className="away-somethin">
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
        <img className="away-db-image" src={db}></img>

        {imgs[id].img2 ?
          <div className="images-tab-away">
            <img className="img-away-left" style={{ width: "450px", height: "auto" }} src={imgs[id].img1} />
            <img className="img-away-right" style={{ width: "450px", height: "auto" }} src={imgs[id].img2} />
          </div>
          :
          <div className="images-tab-away">
            <img className="akela-picture-away" style={{ width: "600px", height: "400px" }} src={imgs[id].img1} />
          </div>}
      </div>
    );
  }
  else {
    return (<div></div>)

  }
};
