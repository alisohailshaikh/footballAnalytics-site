import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import searchmatch from "./searchmatch.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img from './fa.png'
import './SearchMatch.css'

function SearchMatch() {
  const navigate = useNavigate()
  const handclick = () => {
    navigate('/carousel')
  }
  return (
    <div className="search-container">
      <div className="aboutsearch">
        <img src={searchmatch}></img>
      </div>
      <div className="image-container">
        <div className="image-dashboard">
          <img src={img}></img>
        </div>
        <div className="bt">
          <Button variant="contained" onClick={handclick}>Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchMatch;
