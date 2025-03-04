import React from "react";
import { useLocation,useState } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

function Cart() {

  const location = useLocation();
    const { product } = location.state || {}; // Extract product from state

    const navigate = useNavigate();
  
    if (!product) {
      return <div>No product selected.</div>;
    }

    const handleBuyNow = () => {
      navigate("/checkout", { state: { product } }); // Ensure data is wrapped in an object
    };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        {/* Empty Space for Balance */}
        {/* <Col xs={12} lg={1}></Col> */}

        {/* Left Section - Product Table */}
        <Col xs={12} md={8} className="bg-white p-4">
          <h4 className="fw-bold mb-4">YOUR CART</h4>

          {/* Product Table */}
          <Table className="text-center align-middle" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
            <thead style={{ height: "60px", backgroundColor: "#d3d3d3" }}>
              <tr style={{backgroundColor:"green"}}>
                <th className="text-start ps-3">PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr
                  style={{
                  border: "1px solid grey",
                }}
              >
                <td className="d-flex align-items-center">
                  <img
                    src={product.img}
                    className="img-fluid me-3"
                    style={{ width: "85px", height: "120px" }}
                  />
                  <div>
                    <p className="mb-0 fw-medium">{product.product_name}</p><br />
                    <p className="text-muted small">30ml</p>
                  </div>
                </td>
                <td className="fw-semibold" style={{fontSize:"15px"}}>Rs {product.newprice}</td>
                <td className="text-center " style={{ verticalAlign: "middle"}}>
                  <div className="d-flex align-items-center justify-content-center" style={{border:"1px solid grey",width:"100px", marginLeft:"28px"}}>
                    <Button variant="outline-dark" size="xl" style={{border:"none"}}>-</Button>
                    <span className="mx-2" style={{border:"none"}}>1</span>
                    <Button variant="outline-dark" size="xl" style={{border:"none"}}>+</Button>
                  </div>
                </td>
                <td className="fw-semibold" style={{fontSize:"15px"}}>Rs {product.newprice} </td>
              </tr>
            </tbody>
          </Table>

          {/* Additional Comments */}
          <Form.Group controlId="additionalComments">
            <Form.Label className="fw-medium">Additional Comments</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Special instructions for seller..." />
          </Form.Group>
        </Col>

        {/* Right Section - Order Summary */}
        <Col xs={12} md={4} className="bg-white p-4">
          <h4 className="fw-bold pb-2">ORDER SUMMARY</h4>
          <Row className="mt-3 mb-3 border-top border-bottom border-secondary d-flex align-items-center justify-content-between py-2" style={{ height: "70px" }}>
            <Col className="fw-bold">Subtotal</Col>
            <Col className="text-end fw-bold">Rs.2,200.00</Col>
          </Row>
          <Form.Group controlId="couponCode" className="mt-4 mb-4">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Coupon Code" />
            <small className="text-muted">Coupon code will be applied on the checkout page</small>
          </Form.Group>
          <Row className="mt-3">
            <Col className="fw-bold">TOTAL:</Col>
            <Col className="text-end fw-bold">Rs.2,200.00</Col>
          </Row>

          <Link to="/checkout" state={{ product }}>

          <Button onClick={handleBuyNow}  className="w-100 mt-3 mb-1" style={{ backgroundColor: "#f9a8d4", border: "none",fontWeight:"bold",fontSize: "0.875rem",padding:"8px" }}>
            PROCEED TO CHECKOUT
          </Button>

          </Link >
          <Link to="/">
          <Button className="w-100 mt-2" style={{ backgroundColor: "#f9a8d4", border: "none",fontWeight:"bold",fontSize: "0.875rem",padding:"8px" }}>
            CONTINUE SHOPPING
          </Button>
          </Link>
        </Col>

        {/* Empty Space for Balance */}
        {/* <Col xs={12} lg={1}></Col> */}
      </Row>
    </Container>
  );
};

export default Cart;
