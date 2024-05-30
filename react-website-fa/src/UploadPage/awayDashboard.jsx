import { useState } from "react";
import db from "./db.png";
import "./awayDashboard.css";
import { useEffect } from "react";

export default function HomeDashboard({ id, json }) {
  const [fetchdata, setFetchData] = useState(false);
  const [imgs, setImg] = useState([]);
  useEffect(() => {
    const json = {
      "Home": {
          "images": {
              "passes_completed": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Home/passes_completed.png",
              "passes_incomplete": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Home/passes_incomplete.png",
              "receiving": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Home/receiving.png",
              "pressure": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Home/pressure.png",
              "possession": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Home/possession.png"
          },
          "passes": {
              "incomplete": {
                  "normal": 8,
                  "long": 0,
                  "progressive": 4,
                  "cutback": 0,
                  "cross": 0
              },
              "complete": {
                  "normal": 3,
                  "long": 0,
                  "progressive": 0,
                  "cutback": 0,
                  "cross": 0
              }
          },
          "no_of_passes": 10,
          "x_max_pressure": 26,
          "y_max_pressure": 67,
          "avg_pressure": 1.051792828685259,
          "min_pressure": 0,
          "max_pressure": 5,
          "avg_x": 55.47808764940239,
          "avg_y": 54.7410358565737
      },
      "Away": {
          "images": {
              "passes_completed": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Away/passes_completed.png",
              "passes_incomplete": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Away/passes_incomplete.png",
              "receiving": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Away/receiving.png",
              "pressure": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Away/pressure.png",
              "possession": "https://storage.googleapis.com/fyp-testing-aa31e.appspot.com/manual-run/Away/possession.png"
          },
          "passes": {
              "incomplete": {
                  "normal": 10,
                  "long": 0,
                  "progressive": 1,
                  "cutback": 0,
                  "cross": 0
              },
              "complete": {
                  "normal": 3,
                  "long": 0,
                  "progressive": 0,
                  "cutback": 0,
                  "cross": 0
              }
          },
          "no_of_passes": 10, 
          "x_max_pressure": 26, //left on pressure when recieved, Max Pressure when received X,Y:
          "y_max_pressure": 67, //left on pressure when recieved, Max Pressure when received X,Y:
          "avg_pressure": 0.6780383795309168, //right on pressure rating
          "min_pressure": 0, //right on pressure rating
          "max_pressure": 4, //right on pressure rating
          "avg_x": 48.38592750533049, 
          "avg_y": 53.37313432835821
      }
  };
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
            {imgs[id-1].complete_normal}
            <br></br>
            {imgs[id-1].complete_long}
            <br></br>
            {imgs[id-1].complete_progressive}
            <br></br>
            {imgs[id-1].complete_cutback}
            <br></br>
            {imgs[id-1].complete_cross}
          </div>
          <div className="away-somethin">
            {imgs[id-1].incomplete_normal}
            <br></br>
            {imgs[id-1].incomplete_long}
            <br></br>
            {imgs[id-1].incomplete_progressive}
            <br></br>
            {imgs[id-1].incomplete_cutback}
            <br></br>
            {imgs[id-1].incomplete_cross}

          </div>
        </div>
        <img className="away-db-image" src={db}></img>

        {imgs[id-1].img2 ?
          <div className="images-tab-away">
            <img className="img-away-left" style={{ width: "450px", height: "auto" }} src={imgs[id-1].img1} />
            <img className="img-away-right" style={{ width: "450px", height: "auto" }} src={imgs[id-1].img2} />
          </div>
          :
          <div className="images-tab-away">
            <img className="akela-picture-away" style={{ width: "600px", height: "400px" }} src={imgs[id-1].img1} />
          </div>}
      </div>
    );
  }
  else {
    return (<div></div>)

  }
};
