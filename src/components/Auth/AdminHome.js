import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
const AdminHome = () => {
    return(
        <div className="home">
            <Sidebar>
                <div className="homeContainer">
                    <Navb/>
                    <h1>Day la trang admin</h1>
                    <h2>Hello</h2>
                    <h3>test </h3>
                    <h4>test2</h4>  
                </div>
            </Sidebar>
        </div>    
    )
}
export default AdminHome;