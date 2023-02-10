import './LineCharts.scss'
import ChartND from "./ChartND";
import ChartWT from "./ChartWT";
import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import ChartDAD from './ChartDAD';
const LineChart = () => {
    return(
      <>
      <div className="home">
       
        <Sidebar>
          <div className="homeContainer">
            <Navb/>
            <div className="ChartsND" style={{zIndex:"-10",position:"relative"}}>
              <ChartND />
              <ChartDAD />
            </div>
            <div className="ChartsWT">
              <ChartWT />
            </div>
            <footer style={{textAlign:"center",fontSize:"20px",paddingBottom:"20",fontWeight:"bolder"}}>
                © Copyright 2023
            </footer>
          </div>
        </Sidebar>
      </div>
    
    </>
    );

}
export default LineChart;