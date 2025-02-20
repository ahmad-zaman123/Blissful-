import React, { useState } from "react";
import { Offcanvas, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { X } from 'lucide-react';

const MyBag = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow} className="mt-3">
                Open Cart
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header className="border-bottom" style={{ padding: '15px', fontWeight: 'bold' }}>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <span style={{ fontSize: '18px' }}>Shopping Cart</span>
                        <X size={20} onClick={handleClose} style={{ cursor: 'pointer' }} />
                    </div>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Container>
                        {/* Item */}
                        <Row className="mb-3 align-items-center">
                            <Col xs={4}>
                                <Image
                                    src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1799_1_.jpg"
                                    fluid
                                    rounded
                                />
                            </Col>
                            <Col xs={8}>


                                <p style={{ fontSize: '14px', marginBottom: '5px' }}>
                                    Mega Bundle (Oily And Combination Skin)
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ textDecoration: 'line-through', fontWeight: 'bold', fontSize: '12px', marginRight: '10px' }}>
                                        Rs.16,300.00
                                    </div>

                                    <div style={{ fontSize: '14px', color: '#F8A8C2', fontWeight: 'bold' }}>
                                        Rs.13,813.00
                                    </div>
                                </div>

                                <br />

                                <div className="d-flex align-items-center border px-2" style={{ width: "fit-content", border: "1px solid #ccc",height:"38px" }}>
                                    <Button
                                        variant="light"
                                        size="sm"
                                        style={{
                                            
                                            height: "30px",
                                            width: "15px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "18px",
                                            background: "white"
                                        }}
                                    >
                                        −
                                    </Button>

                                    <span className="px-3" style={{ fontSize: "17px", minWidth: "30px", textAlign: "center" }}>
                                        1
                                    </span>

                                    <Button
                                        variant="light"
                                        size="sm"
                                        style={{
                                           
                                            height: "30px",
                                            width: "15px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "18px",
                                            background: "white"
                                        }}
                                    >
                                        +
                                    </Button>
                                </div>

                            </Col>


                        </Row>

                        {/* Subtotal */}
                        <Row className="border-top pt-3">
                            <Col className="d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span>Rs.13,813.00</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong>Rs.13,813.00</strong>
                            </Col>
                        </Row>

                        {/* Buttons */}
                        <Button className="w-100 mb-3" style={{ backgroundColor: '#F8A8C2', border: 'none',fontWeight:"bold" }}>
                            CHECKOUT
                        </Button>
                        <Button className="w-100" style={{ backgroundColor: '#F8A8C2', border: 'none' ,fontWeight:"bold"}}>
                            VIEW CART
                        </Button>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MyBag;
