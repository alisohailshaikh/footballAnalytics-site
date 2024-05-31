import ResponsiveAppBar from "../NavBar/NavBarNew";
import { Typography } from "@mui/material";
import alis from "./alis.png";
import maaz from "./maaz.png";
import hamza from "./hamza.png";
import alia from "./alia.png";
import './About.css'

export default function About() {
    const linkedinUrl = "https://www.linkedin.com/in/alisohail-shaikh/"
    const revert0 = (event) => {
        event.preventDefault();
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
      };
      const revert1 = (event) => {
        event.preventDefault();
        window.location.href = linkedinUrl;
      };
      const revert2= (event) => {
        event.preventDefault();
        window.location.href = linkedinUrl;
      };
      const revert3= (event) => {
        event.preventDefault();
        window.location.href = linkedinUrl;
      };
  return (
    <div style={{ textAlign: "center" }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="heading">
        <Typography
          variant="h4"
          noWrap
          component="a"
          sx={{
            mx: "auto",
            fontFamily: "monospace",
            fontWeight: 1500,
            letterSpacing: ".5rem",
            textDecoration: "none",
            color: "#ffffff",
            alignContent: "center",
          }}
        >
          ABOUT OUR TEAM
        </Typography>
      </div>
      <div className="about-us-cards">
        <div className="hamza">
          <img src={hamza} onClick={revert0}></img>
        </div>
        <div className="ali-s">
          <img src={alis} onClick={revert1}></img>
        </div>
        <div className="maaz">
          <img src={maaz} onClick={revert2}></img>
        </div>
        <div className="ali-a">
          <img src={alia} onClick={revert3}></img>
        </div>
      </div>
    </div>
  );
}
