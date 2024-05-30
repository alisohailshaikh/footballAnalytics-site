import ResponsiveAppBar from "../NavBar/NavBarNew";
import "./Dashboard.css";
import xgot from "./xgot.png";
import finalthird from './finalthird.png'
import xg from './xg.png'
import goalpos from './goalpos.png'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <ResponsiveAppBar />
      <div className="dashbpard-page">
        <div className="dashboard-right">
          <img src={xgot}></img>
          <img src={finalthird}></img>
        </div>
        <div className="db-page-container" id="dashboard">
          <iframe
            title="test-fyp"
            width="1250"
            height="700"
            src="https://app.powerbi.com/view?r=eyJrIjoiZGMzYjE3MGQtYjkzNi00ZTllLWIxNDItNjVlMzJiM2IwZGZjIiwidCI6ImZlZTNiOTE2LTAxYzEtNDk4Ny1hNjQ2LWUxOTM0MzJiOWVhYSIsImMiOjl9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="dashboard-left">
          <img src={xg}></img>
          <img src={goalpos}></img>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
