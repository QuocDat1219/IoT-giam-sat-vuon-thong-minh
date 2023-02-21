import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import Form from 'react-bootstrap/Form';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ControlDevice.css";
const ControlDevice = () => {
    return (
        <div className="home">
            <Sidebar>
                <div className="homeContainer">
                    <Navb />
                    <h1 className="title">Điều khiển các thiết bị từ xa</h1>
                    <Container>
                        <Row md={3}>
                            <Col>
                                <div className="control">
                                    <div className="controlbody">
                                        <Form.Group className="mb-3" controlId="formBasicTimeWork">
                                            <Form.Label className="devicename">Tên thiết bị: <strong>Đèn</strong>
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicTimeWork">
                                            <Form.Label className="devicestatus">Chỉnh sửa: 
                                            </Form.Label>
                                            <button className="btnEdit" style={{fontSize:"24px"}}>
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
                            <Col>
                                <div className="control">
                                    <div className="controlbody">
                                        <Form.Group className="mb-3" controlId="formBasicTimeWork">
                                            <Form.Label className="devicename">Tên thiết bị: <strong>Đèn</strong>
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicTimeWork">
                                            <Form.Label className="devicestatus">Chỉnh sửa: 
                                            <Form.Label>  </Form.Label>
                                            </Form.Label>
                                            <button className="btnEdit" style={{fontSize:"24px"}}>  
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
                </div>
            </Sidebar>
        </div>
    );
};
export default ControlDevice;