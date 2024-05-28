import { useState } from "react";
import db from "./db.png";
import "./homeDashboard.css";

import { useEffect } from "react";

export default function HomeDashboard(id) {
  const [fetchdata, setFetchData] = useState(false);
  const [imgs,setImg] = useState([]);
  useEffect(()=>{
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
  console.log(json);
  setImg([
    {
      index: 1,
      img1: json.Home.images.passes_completed, 
      complete_normal: "Normal passes completed: "+json.Home.passes.complete.normal,
      complete_long: "Long passes completed: "+json.Home.passes.complete.long,
      complete_progressive: "Progessive passes completed: "+json.Home.passes.complete.progressive,
      complete_cutback: "Cutbacks completed: "+json.Home.passes.complete.cutback,
      complete_cross: "Crosses completed: "+json.Home.passes.complete.cross,
      img2: json.Home.images.passes_incomplete,
      incomplete_normal: "Normal passes not completed: "+json.Home.passes.incomplete.normal,
      incomplete_long: "Long passes not completed: "+json.Home.passes.incomplete.long,
      incomplete_progressive: "Progessive passes not completed: "+json.Home.passes.incomplete.progressive,
      incomplete_cutback: "Cutback not completed: "+json.Home.passes.incomplete.cutback,
      incomplete_cross: "Crosses not completed: "+json.Home.passes.incomplete.cross
    },
    {
        index: 2,
        img1: json.Home.images.receiving,
        complete_normal: "Max Pressure when received on X: "+json.Home.x_max_pressure,
        complete_long: "Max Pressure when received on Y: "+json.Home.y_max_pressure,
        img2: json.Home.images.pressure,
        incomplete_normal: "Average Pressure: "+json.Home.avg_pressure,
        incomplete_long: "Maximum Pressure Rating: "+json.Home.max_pressure,
        incomplete_progressive: "Minimum Pressure rating: "+json.Home.min_pressure,
    },
    {
      index: 3,
      img1: json.Home.images.possession,
      complete_normal: "Average X Player Position: "+json.Home.avg_x,
      incomplete_normal: "Average Y Player Position: "+json.Home.avg_y,
  
  },
]);
setFetchData(true);
  },[])

   
  if (fetchdata) {
  return (
    <div className="main-home-db">
      <div className="home-stats">
        <div className="home-count">
          {imgs[id.index].complete_normal}
          <br></br>
          {imgs[id.index].complete_long}
          <br></br>
          {imgs[id.index].complete_progressive}
          <br></br>
          {imgs[id.index].complete_cutback}
          <br></br>
          {imgs[id.index].complete_cross}
        </div>
        <div className="home-somethin">
        {imgs[id.index].incomplete_normal}
          <br></br>
          {imgs[id.index].incomplete_long}
          <br></br>
          {imgs[id.index].incomplete_progressive}
          <br></br>
          {imgs[id.index].incomplete_cutback}
          <br></br>
         {imgs[id.index].incomplete_cross}
          
        </div>
      </div>
      <img className="home-db-image" src={db}></img>
      
      {imgs[id.index].img2? 
      <div className="images-tab-home">
      <img className="img-home-left" style={{ width: "450px", height: "auto" }} src={imgs[id.index].img1} />
      <img className="img-home-right" style={{ width: "450px", height: "auto" }} src={imgs[id.index].img2}/>
      </div>
        : 
        <div className="images-tab-home">
        <img className="akela-picture-home" style={{ width: "600px", height: "400px" }} src={imgs[id.index].img1} />
        </div> }
      </div>
  );
}
else {
  return (<div></div>)

}
};
