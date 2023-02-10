import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import React, { useContext, useEffect, useState } from "react";
import "./ProfileCard.css";
import avatar from "../images/image-rita.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const UserPro = (props) => {


    const [email, setEmail] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [pass, setPass] = useState("");


    function handleClickSave(e){
        e.preventDefault();
        console.log(email,fname,lname,pass);
    }
    return (

        <div className="home">
            <Sidebar>
                <div className="homeContainer">
                    <Navb />
                    <div>
                        <h1 className="name" style={{ paddingLeft: "30px", fontSize: "40px", paddingTop: "20px", fontFamily: 'Roboto', color: "darkturquoise", paddingBottom: "20px" }}> Thông tin cá nhân</h1>
                        <div className="card-container" style={{ textAlign: "center" }}>
                            <header>
                                <img className="imgavt" src={avatar} alt={props.name} style={{ height: "300px", width: "300px", marginTop: "10px", marginBottom: "10px" }} />
                            </header>
                            <div className="social-container">
                                <div className="followers">
                                    <h1 className="smaller-text">Email</h1>
                                    <h2 className="bold-text" style={{ paddingBottom: "20px" }}>{props.followers} mail </h2>
                                </div>
                                <div className="likes">
                                    <h1 className="smaller-text">Name</h1>
                                    <h2 className="bold-text" style={{ paddingBottom: "20px" }}>{}</h2>
                                </div>
                                <div className="photos">
                                    <h1 className="smaller-text">Password</h1>
                                    <h2 className="bold-text" style={{ paddingBottom: "20px" }}>{props.photos} 12345</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", paddingTop: "30px" }}>
                            <div style={{ border: "0px black solid", height: "500px", width: "500px", borderRadius: "10px", marginTop: "30px", boxShadow: "0px 10px 30px hsl(185deg 75% 35%)", margin: "auto" }}>
                                <label className="text-center" style={{ textAlign: "center", fontSize: "30px", paddingLeft: "150px", paddingTop: "10px", color: "#3cc7d1" }}>Sửa thông tin</label>
                                <br></br>
                                <br></br>
                                <input className="text-center" value={email} placeholder={"Email..."} disabled="true"
                                    style={{
                                        border: "1px solid #d9d6d6",
                                        borderRadius: "15px",
                                        height: "45px",
                                        width: "400px",
                                        marginLeft: "45px",
                                        boxShadow: "rgb(187 203 205) 0px 2px 18px"
                                    }}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <br></br>
                                <br></br>
                                <input className="text-center" value={fname} placeholder={"First name..."}
                                    style={{
                                        border: "1px solid #d9d6d6",
                                        borderRadius: "15px",
                                        height: "45px",
                                        width: "400px",
                                        marginLeft: "45px",
                                        boxShadow: "rgb(187 203 205) 0px 2px 18px"
                                    }}
                                    onChange={(e) => setFName(e.target.value)} />
                                <br></br>
                                <br></br>
                                <input className="text-center" value={lname} placeholder={"Last name..."}
                                    style={{
                                        border: "1px solid #d9d6d6",
                                        borderRadius: "15px",
                                        height: "45px",
                                        width: "400px",
                                        marginLeft: "45px",
                                        boxShadow: "rgb(187 203 205) 0px 2px 18px"
                                    }}
                                    onChange={(e) => setLName(e.target.value)} />
                                <br></br>
                                <br></br>
                                <input className="text-center" value={pass} placeholder={"Password..."}
                                    style={{
                                        border: "1px solid #d9d6d6",
                                        borderRadius: "15px",
                                        height: "45px",
                                        width: "400px",
                                        marginLeft: "45px",
                                        boxShadow: "rgb(187 203 205) 0px 2px 18px"
                                    }}
                                    onChange={(e) => setPass(e.target.value)} />
                                <br></br>
                                <br></br>
                                <button onClick={handleClickSave}
                                    style={{
                                        width: "100px",
                                        height: "50px",
                                        backgroundColor: "#3CC7D0",
                                        marginLeft: "202px",
                                        marginTop: " 20px",
                                        borderRadius: "10px",
                                        fontSize: "20px",
                                        boxShadow: "15px",
                                        height: "45px",
                                        width: "400px",
                                        marginLeft: "45px",
                                        boxShadow: "rgb(187 203 205) 0px 2px 18px"
                                    }}>Save</button>
                            </div>
                        </div>
                        <div style={{ textAlign: "center", paddingTop: "20px" }}>
                            Copyright
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}
export default UserPro;