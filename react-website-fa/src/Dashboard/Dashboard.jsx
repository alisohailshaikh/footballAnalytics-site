import ResponsiveAppBar from "../NavBar/NavBarNew";
import './Dashboard.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";





function Dashboard() {

    const [refresh, setRefresh] = useState(true)
    // useEffect(() => {
    //     window.open("https://app.powerbi.com/groups/me/reports/2f2d475b-8bf0-4242-a6b5-6df9a7daacb5/c0c24bf5c8c6a09371dc?experience=power-bi", '_blank', 'noopener,noreferrer');
    // },[]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setRefresh(false)
    //         console.log("myBool is now true"); // Optional: Log the change
    //       }, 20000);
    // })
    return (
        <div className="dashboard-container" id="pdf">
            <ResponsiveAppBar />
            {/* {refresh? <Typography variant="h4" component="h1" className="search-heading">
            GETTING UR DASHBAORD READY.....
          </Typography>: */}
            
            <div className="db-page-container" id="dashboard">
              <iframe title="test-fyp" width="1200" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZGMzYjE3MGQtYjkzNi00ZTllLWIxNDItNjVlMzJiM2IwZGZjIiwidCI6ImZlZTNiOTE2LTAxYzEtNDk4Ny1hNjQ2LWUxOTM0MzJiOWVhYSIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
            </div> 

        </div>
    );
}

export default Dashboard;
