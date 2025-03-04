import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Checkout (){
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("safepay");

  const location = useLocation();
  const { product } = location.state || {}; // Extract product from state

  if (!product) {
    return <div>No product selected.</div>;
  }

  return (
    <Container fluid className="min-vh-100 bg-white d-flex align-items-center mb-5">
      
      <Row className="w-100 g-3 mt-3" >
       
        <Col lg={1} md={1} className="d-none d-lg-block bg-white"></Col>
        <Col lg={6} md={6} sm={12} className="p-4 bg-white">
          <h1 className="fs-4 fw-semibold mb-3">Blissful</h1>
          <Form>
            <h3 className="fs-6 fw-medium mb-2">Contact</h3>
            <Form.Control type="email" placeholder="Email" className="mb-2" style={{ height: "55px" }} />
            <Form.Check type="checkbox" label="Email me with news and offers" />
            
            <h3 className="fs-6 fw-medium mb-2 mt-3">Delivery</h3>
            <Form.Select className="mb-2" style={{ height: "55px" }}>
              <option>Pakistan</option>
            </Form.Select>
            <Row className="g-2">
              <Col><Form.Control type="text" placeholder="First name" style={{ height: "55px" }} /></Col>
              <Col><Form.Control type="text" placeholder="Last name" style={{ height: "55px" }}/></Col>
            </Row>
            <Form.Control type="text" placeholder="Address" className="mt-2" style={{ height: "55px" }} />
            <Form.Control type="text" placeholder="Phone" className="mt-2" style={{ height: "55px" }} />
            
            <h3 className="fs-6 fw-medium mb-2 mt-3">Payment</h3>
            <div className="p-3 rounded" style={{ backgroundColor: "rgba(249, 168, 212, 0.3)", border: "1px solid #f9a8d4" }}>
              <Form.Check type="radio" label="Safepay Checkout - pay with debit & credit cards" name="payment" checked={paymentMethod === "safepay"} onChange={() => setPaymentMethod("safepay")} />
            </div>
            <div className="border rounded p-3">
              <Form.Check type="radio" label="Cash on Delivery (COD)" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
            </div>
            <Button className="w-100 mt-3 text-white" style={{ backgroundColor: "#f9a8d4", border: "1px solid #f9a8d4", height: "55px", fontSize: "22px" }}>
              Pay now
            </Button>
          </Form>
        </Col>
        <Col lg={5} md={5} sm={12} className="bg-light p-4 position-sticky" style={{ top: "0px", height: "100vh", overflowY: "auto", zIndex: 10 }}>
          <div className="d-flex align-items-center mb-3">
            <img src={product.img} alt="Product" className="rounded me-3" style={{ width: 50, height: 60 }} />
            <div>
              <p className="mb-0 fw-medium">{product.product_name}</p>
              <p className="text-muted small">30ml</p>
            </div>
            <p className="ms-auto fw-medium">Rs {product.newprice}</p>
          </div>
        </Col>
        
        {/* <Col lg={1} className="d-none d-lg-block bg-light position-sticky" style={{ top: "0px", height: "100vh", overflowY: "auto", zIndex: 10 }}></Col> */}
      </Row>

      
    </Container>
  );
};

Checkout.propTypes = {
  product: PropTypes.shape({
    product_name: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default Checkout;
