import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
const AdminHome = () => {
    return(
        <div className="home">
            <Sidebar>
                <div className="homeContainer">
                    <Navb/>
                    <h1>Day la trang admin</h1>
                    <h2>Hello admin</h2>
                    <p>Hello thuan</p>
                    <p>Hello thuan2</p>
                    <h1>hello test</h1>
                </div>
            </Sidebar>
        </div>    
    )
}
export default AdminHome;