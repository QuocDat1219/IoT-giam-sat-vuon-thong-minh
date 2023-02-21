import './LineCharts.scss'
import ChartND from "./ChartND";
import ChartWT from "./ChartWT";
import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import ChartDAD from './ChartDAD';
import Footer from "../LandingPage/UI/Footer";
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
            <div>
            <Footer/>
            </div>
          </div>
        </Sidebar>
      </div>
    
    </>
    );

}
export default LineChart;