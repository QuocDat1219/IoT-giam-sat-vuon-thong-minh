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
          <div className="homeContainer" >
            <Navb/>
            <div className="ChartsND"  >
              <ChartND />
              <ChartDAD />
            </div>
            <div className="ChartsWT">
              <ChartWT />
            </div>
          </div>
        </Sidebar>
      </div>
    
    </>
    );

}
export default LineChart;