import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import Form from 'react-bootstrap/Form';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../LandingPage/UI/Footer";
import { useState } from "react";
import "./ControlDevice.css";
import { padding } from "@mui/system";

const ControlDevice = () => {
    const [showModal, setShowModal] = useState(false);
    const [controlDevice, setControlDevice] = useState([]);
    const [devicename, setDeviceName] = useState("");
    const handleShowModal = () => {
        setShowModal(true);
    }
    return (

        <div className="home">
            <Sidebar>
                <div className="homeContainer">
                    <Navb />
                    {controlDevice ? (
                        <>
                            <h1 className="title">Điều khiển các thiết bị từ xa</h1>
                            <Container>
                                <Row md={3}>
                                    <Col>
                                        <div className="control">
                                            <div className="controlbody">
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="devicename">Tên thiết bị: <strong>Đèn</strong>
                                                    </Form.Label>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="devicestatus">Chỉnh sửa: <Form.Label>    </Form.Label>
                                                    </Form.Label>

                                                    <button className="btnEdit" style={{ fontSize: "24px" }}
                                                        onClick={handleShowModal}>
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label className="titlecontrol">Điều khiển: </Form.Label>
                                                    <BootstrapSwitchButton checked={true} onstyle="success" onlabel="On" offlabel="Off" style='px-10 mx-2' />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="control">
                                            <div className="controlbody">
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="devicename">Tên thiết bị: <strong>Đèn</strong>
                                                    </Form.Label>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="devicestatus">Chỉnh sửa: <Form.Label>  </Form.Label>

                                                    </Form.Label>
                                                    <button className="btnEdit" style={{ fontSize: "24px" }}>
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicTimeWork">
                                                    <Form.Label className="titlecontrol">Điều khiển: </Form.Label>
                                                    <BootstrapSwitchButton checked={true} onstyle="success" onlabel="On" offlabel="Off" style='px-10 mx-2' />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    ) : (
                        "Loading..."
                    )}
                </div>
                {showModal ? (
                    <div className="bodyModal">
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold">
                                            Chỉnh sửa thiết bị
                                        </h3>
                                        <button
                                            style={{ color: 'red' }}
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >X
                                        </button>
                                    </div>
                                    <Form style={{width:"500px", padding:"10px"}}>
                                        <Form.Group className="mb-3">                         
                                            <Form.Label className="devicename">Tên thiết bị: <strong>Đèn</strong>
                                            </Form.Label>
                                            <br /><br />
                                            <Form.Control 
                                            type="text" 
                                            value={devicename}
                                            placeholder="Nhập tên mới"
                                            onChange={(e) => setDeviceName(e.target.value)}
                                            />
                                        </Form.Group>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Cập nhật
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                ) : null}
                <div style={{ paddingTop: "10px" }}>
                    <Footer />
                </div>
            </Sidebar>
        </div>

    );
};
export default ControlDevice;