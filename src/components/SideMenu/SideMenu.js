import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import { faUser,faAddressBook,faReorder,faBarChart,faTable,faSignOut } from '@fortawesome/free-solid-svg-icons'
import './SideMenu';
const SideMenu = () => {
    return (
        <div className="Menu" style={{ width: "300px", }}>
            <Navbar bg="light" style={{backgroundColor:"#CCC"}}>
                <Container>
                    
                    <Navbar.Brand href="/" style={{fontSize:"30px", fontWeight:"bolder"}}>
                    <FontAwesomeIcon icon={faAddressBook}/>
                        <Link to="/">Side Menu</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{color:"#AAB7B8 "}}>
                        <FontAwesomeIcon icon={faUser} />
                    </Navbar.Brand>
                    <span>Hi, <b style={{color:"#000"}}>WellCome</b></span>

                    <span>Quoc Dat</span>

                </Container>
            </Navbar>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{color:"#AAB7B8 "}}>
                    <FontAwesomeIcon icon={faReorder}/>
                       <Link to="/" >Thông Số</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{color:"#AAB7B8 "}}> 
                        <FontAwesomeIcon icon={faBarChart}/>
                        <Link to="/home">Biểu đồ</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{color:"#AAB7B8 "}}>
                        <FontAwesomeIcon icon={faTable}/>
                        <Link to="/home" >Bảng dữ liệu</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home" style={{color:"#AAB7B8 "}}>
                    <FontAwesomeIcon icon={faUser}/>
                    <Link to="/home" >Trang cá nhân</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{color:"#AAB7B8 "}}>
                    <FontAwesomeIcon icon={faSignOut}/>
                    <Link to="/" >Logout</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default SideMenu;