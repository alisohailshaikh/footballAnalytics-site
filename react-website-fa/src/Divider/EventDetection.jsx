import * as React from "react";
import "./UploadVid.css";
import eventdetection from "./eventdetection.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function EventDetection() {
  const link = "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/upload%2Foutput_video%20(2).mp4?alt=media&token=8109efbd-baef-4dff-aa79-6e3b90b5eb89"
  
  const navigate = useNavigate()
  const gotouploadvent = () => {
    navigate('/uploadevent')
  }
  
  return (
    <div className="container">
      <div className="aboutvid">
        <img src={eventdetection}></img>
      </div>
      <div className="videocon">
        <div className="vid">
          <video autoPlay={true} src={link}></video>
        </div>
        <div className="bt">
          <Button variant="contained" onClick={gotouploadvent}>Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default EventDetection;
