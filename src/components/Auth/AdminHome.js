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
                    <p>Hello thuan and tuananh</p>
                    <p>Hello GiaBao</p>
                </div>
            </Sidebar>
        </div>    
    )
}
export default AdminHome;