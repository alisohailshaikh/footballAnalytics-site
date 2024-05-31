import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { buttonClasses } from "@mui/base/Button";
import { styled } from "@mui/system";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import "./MatchDashboard.css";
import Button from "@mui/material/Button";
import HomeDashboard from "./homeDashboard";
import AwayDashboard from "./awayDashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import topleft from "./topleft.png";
import bottomleft from "./bottomleft.png";
import topright from "./topright.png";
import bottomright from "./bottomlright.png";
import analyse from "./analyse.png";
import analysediagram from "./analysediagram.png";
import analyseexplanation from "./analyseexplanation.png";
import toppressure from "./toppressure.png";
import toppressureexplanation from "./topppressureexplanation.png";
import toppressurediagram from "./toppressurediagram.png";

export default function MatchDashboard() {
  const [index, setIndex] = useState(1);
  const [result, setResult] = useState({});
  const [taskid, settaskid] = useState("");
  const [err, setErr] = useState("");
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const base_api = process.env.REACT_APP_INFER_API;

  const handleNext = () => {
    if (index == 3) {
      console.log("exceeded");
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
    console.log("from match");
    console.log(index);
  };
  const handlePrevious = () => {
    if (index == 1) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
    console.log("from match");
    console.log(index);
  };

  const fetchResult = async () => {
    if (localStorage.getItem("detect_task_id")) {
      const task_id = localStorage.getItem("detect_task_id");
      try {
        const response = await fetch(
          `${base_api}/infer/detect/result/${task_id}`
        );
        if (response.ok) {
          const res = await response.json();
          if (res) {
            setResult(res.value);
            settaskid(task_id);
            setLoaded(true);
          } else {
            navigate(`/upload`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("detect_upload_id")) {
      fetchResult().then(() => {});
    } else {
      // navigate('/home')
    }
  }, []);

  const keys = [
    {
      index: 1,
      img1: topleft,
      img2: bottomleft,
      img4: topright,
      img5: bottomright,
    },
    {
      index: 2,
      img1: analyse,
      img2: analysediagram,
      img3: analyseexplanation,
      img4: toppressure,
      img5: toppressurediagram,
      img6: toppressureexplanation,
    },
    {
      index: 3,
    },
  ];

  return (
    <div>
      <ResponsiveAppBar />
      <div className="homeaway">
        <div className="previous-left">
          <img src={keys[index - 1].img1}></img>
          <img src={keys[index - 1].img2}></img>
          <img src={keys[index - 1].img3}></img>
          <div className="previous-bt">
            <Button variant="contained" style={{width:"150px"}} onClick={handlePrevious}>
              Previous
            </Button>
          </div>
        </div>
        <div className="db">
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>Home</Tab>
              <Tab value={2}>Away</Tab>
            </TabsList>
            <TabPanel
              value={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
              }}
            >
              <div className="home-db">
                {/* {loaded ?  */}
                <HomeDashboard id={index} json={result} />
                {/* null} */}
              </div>
            </TabPanel>
            <TabPanel
              value={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
              }}
            >
              <div className="away-db">
                {/* {result ? */}
                <AwayDashboard id={index} json={result} />
                {/* null} */}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="next-right">
          <img src={keys[index - 1].img4}></img>
          <img src={keys[index - 1].img5}></img>
          <img src={keys[index - 1].img6}></img>
          <div className="next-bt">
            <Button variant="contained" style={{width:"150px"}} onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #201a2b;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #0c2222;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #201a2b;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #201a2b;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
}
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    width: 1000px;
    background-color: #0A172B;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
    `
);
