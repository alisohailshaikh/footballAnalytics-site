import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { buttonClasses } from "@mui/base/Button";
import { styled } from "@mui/system";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import './MatchDashboard.css'
import Button from "@mui/material/Button";
import HomeDashboard from "./homeDashboard";
import AwayDashboard from "./awayDashboard";
import { useState } from "react";



export default function MatchDashboard() {
  const [index,setIndex] = useState(0);
  const handleNext = () => {
    setIndex((index%3)+1);
    console.log("from match");
    console.log(index)
  }
  const handlePrevious = () => {
    setIndex((index%3)-1);
    console.log("from match");
    console.log(index)
  }
  return (
    <div>
      <ResponsiveAppBar />
      <div className="homeaway">
      <div className="previous-left">
        <Button className="previous-bt" variant="contained" onClick={handlePrevious}>Previous</Button>
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
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <div className="home-db">
             <HomeDashboard index={index}/>
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
             <AwayDashboard index={index}/>
            </div>
          </TabPanel>
        </Tabs>
        </div>
        <div className="next-right">
        <Button className="next-bt" variant="contained" onClick={handleNext}>Next</Button>
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
