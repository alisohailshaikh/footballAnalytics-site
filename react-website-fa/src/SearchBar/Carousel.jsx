import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import bgpurple from "./bgSearchpurple.png";
import vs from "./vs.png";
import { AlertTitle, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import { footballFacts, links, imgs } from "./arrays.js";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [error, setError] = useState(false);
  const [date, setDate] = useState(null);
  const [dateerror, setDateError] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [search, setSearch] = useState(true);
  const [open, setOpen] = useState(false);
  const [apierror, setApiError] = useState(false);
  const api = process.env.REACT_APP_BASE_API;

  const navigate = useNavigate();

  const apigetOverview = (matchid) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${api}/overview/${matchid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setProgress(95);
        setTimeout(() => {
          setProgress(100);
          navigate("/dashboard");
        }, 20000);
      })
      .catch((error) => {
        console.log(error);
        setSearch(true);
          setApiError(true);
          setTimeout(() => {
            setApiError(false);
          }, 3000);
      });
  };

  const apigetstats = (matchid) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${api}/stats/${matchid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setProgress(80);
        apigetOverview(matchid);
      })
      .catch((error) => {
        console.log(error);
        setSearch(true);
          setApiError(true);
          setTimeout(() => {
            setApiError(false);
          }, 3000);
      });
  };

  const apiplayerstats = (matchid) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${api}/playerstats/${matchid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setProgress(60);
        apigetstats(matchid);
        // apigetOverview(matchid)
      })
      .catch((error) => {
        console.log(error);
        setSearch(true);
          setApiError(true);
          setTimeout(() => {
            setApiError(false);
          }, 3000);
      });
  };

  const apigetshots = (matchid) => {
    console.log("in api get shots");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${api}/playershots/${matchid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setProgress(40);
        apiplayerstats(matchid);
      })
      .catch((error) => {
        console.log(error);
        setSearch(true);
          setApiError(true);
          setTimeout(() => {
            setApiError(false);
          }, 3000);
      });
  };
  const handlesubmit = () => {
    console.log(imgs[currentSlide].name);
    console.log(imgs[currentSlide1].name);
    console.log(date);
    if (imgs[currentSlide].name == imgs[currentSlide1].name) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (date == null) {
      setDateError(true);
      setTimeout(() => {
        setDateError(false);
      }, 3000);
    } else {
      setOpen(true);
      setSearch(true);
      var str = `sofa score ${imgs[currentSlide].name} vs ${imgs[currentSlide1].name} ${date}`;
      console.log(str);
      let data = JSON.stringify({
        search_query: str,
      });
      setSearch(false);
      setProgress(0);
      let config0 = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${api}/matchid`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config0)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setProgress(20);
          apigetshots(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
          setSearch(true);
          setApiError(true);
          setTimeout(() => {
            setApiError(false);
          }, 3000);
        });
    }
  };

  const change1 = (index) => {
    setCurrentSlide(index);
    setError(false);
  };
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  var settings1 = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: (index) => setCurrentSlide1(index),
  };

  const handlecancel = () => {
    setProgress(0);
    setSearch(true);
  };

  return (
    <div>
      <ResponsiveAppBar />
      {search ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h1" className="search-heading">
            SEARCH FOR ANY MATCH{" "}
          </Typography>
          {error ? (
            <Alert severity="error" variant="filled">
              <AlertTitle>Teams cannot be the same</AlertTitle>
              {error}
            </Alert>
          ) : null}
          {apierror ? (
            <Alert severity="error" variant="filled">
              <AlertTitle>There was a problem searching your match. Please try again</AlertTitle>
              {error}
            </Alert>
          ) : null}
          {dateerror ? (
            <Alert severity="error" variant="filled">
              <AlertTitle>Please choose a date</AlertTitle>
              {error}
            </Alert>
          ) : null}
          <div className="searchbox">
            <div className="slider-container-left">
              <div className="background">
                <img src={bgpurple} alt="Background" />
              </div>
              <Slider {...settings} className="slider">
                {imgs.map((url) => (
                  <div className="cards_search" key={url.name}>
                    <div className="content">
                      <div className="name">
                        <Typography
                          variant="h5"
                          Wrap
                          component="a"
                          sx={{
                            fontFamily: "monospace",
                            fontWeight: 700, // Adjusted to bold
                            letterSpacing: ".5rem",
                            textDecoration: "none",
                            color: "#ffffff",
                            alignContent: "center",
                          }}
                        >
                          {url.name}
                        </Typography>
                      </div>
                      <div className="images">
                        <img src={url.img} alt={url.name} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="vs">
              <img src={vs} alt="vs" />
            </div>

            <div className="slider-container-right">
              <div className="background">
                <img src={bgpurple} alt="Background" />
              </div>
              <Slider {...settings1} className="slider">
                {imgs.map((url) => (
                  <div className="cards_search" key={url.name}>
                    <div className="content">
                      <div className="name">
                        <Typography
                          variant="h5"
                          Wrap
                          component="a"
                          sx={{
                            fontFamily: "monospace",
                            fontWeight: 700, // Adjusted to bold
                            letterSpacing: ".5rem",
                            textDecoration: "none",
                            color: "#ffffff",
                            alignContent: "center",
                          }}
                        >
                          {url.name}
                        </Typography>
                      </div>
                      <div className="images">
                        <img src={url.img} alt={url.name} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* End of right side content */}
            </div>
          </div>
          {/* Date Picker Section */}
          <div className="date-picker">
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <Button
            className="s-button"
            onClick={handlesubmit}
            style={{
              position: "fixed",
              bottom: "55px",
              right: "140px",
              backgroundColor: "#F9104F",
              color: "white",
              border: "none",
              padding: "15px 30px",
              fontSize: "16px",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            SEARCH AND ANALYZE
          </Button>
        </div>
      ) : (
        //LOADING COMPONENET HERE
        <div className="load-container">
          <Typography variant="h4" component="h1" className="load-text">
            SEARCHING FOR YOUR MATCH
          </Typography>
          <div className="loader">
            <CircularProgress
              color="inherit"
              variant="determinate"
              value={progress}
              size={300}
            />
            <div className="circular-progress-num">{`${progress}%`}</div>
          </div>
          <div className="fact-container">
            <Typography variant="h6" component="h1" className="fact">
              {footballFacts[Math.floor(Math.random() * footballFacts.length)]}
            </Typography>
          </div>
          <Button
            className="cancel-button"
            onClick={handlecancel}
            style={{
              backgroundColor: "#F9104F",
              color: "white",
              border: "none",
              padding: "15px 30px",
              fontSize: "16px",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
