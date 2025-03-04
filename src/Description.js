import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Offcanvas, Container, Row, Col, Button, Card, Image, Form } from "react-bootstrap";
import { FaStar, FaHeart, FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";


function Description() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const { state: product } = location;

  const [favorite, setFavorite] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleStart, setVisibleStart] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = product?.images || [];

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } }); // Ensure data is wrapped in an object
  };

  const relatedProducts = [
    {
      img: "https://shopblissfulbeauty.com/cdn/shop/files/24_bf5459f5-d450-4ed1-8eaa-c2562452826c.jpg?v=1738904114",
      oldprice: "1,750.00",
      product_name: "Barrier Repair",
      sub_name: "Cleanser",
      newprice: "1,487.00",
      discount: "15%",
    },
    {
      img: "https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134",
      oldprice: "2,000.00",
      product_name: "Face Serum",
      sub_name: "Vitamin C",
      newprice: "1,800.00",
      discount: "10%",
    },
    {
      img: "https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5_1570x.png?v=1738904143",
      oldprice: "1,750.00",
      product_name: "Super Serum",
      sub_name: "Bundle",
      newprice: 1487.00,
      discount: "15%",
    },
    {
      img: "https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140",
      oldprice: "1890",
      product_name: "Teenage",
      sub_name: "Skincare",
      newprice: 1512.00,
      discount: "15%",
    },
    // Add more related products if needed...
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let visibleProducts = 4;
  if (windowWidth < 992) visibleProducts = 3;
  if (windowWidth < 768) visibleProducts = 2;

  const imageHeight = windowWidth >= 1100 ? "360px" : "300px";

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % relatedProducts.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + relatedProducts.length) % relatedProducts.length);
  };

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <Container>
        <Row className="mt-3">

          <Col md={7} className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center" style={{ marginRight: "10px" }}>
              {images.slice(visibleStart, visibleStart + 3).map((img, index) => (
                <Image
                  key={visibleStart + index}
                  src={img}
                  alt="Product Thumbnail"
                  fluid
                  className="mb-2"
                  style={{
                    width: "50px",
                    height: "70px",
                    cursor: "pointer",
                    border: selectedIndex === visibleStart + index ? "2px solid black" : "none",
                  }}
                  onClick={() => setSelectedIndex(visibleStart + index)}
                />
              ))}
            </div>
            <Image
              src={images[selectedIndex]}
              alt={product.product_name}
              fluid
              style={{ width: "85%", height: "700px" }}
            />
          </Col>
          <Col md={5}>
            <h2>{product.product_name}</h2>
            <div className="d-flex align-items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="green" />
              ))}
              <span className="ms-2">44 reviews</span>
            </div>
            <p style={{ fontSize: "14px" }}>{product.description}</p>
            <p style={{ fontSize: "22px" }}>
              <strong>
                <del>Rs.{product.oldprice}</del>
              </strong>
              <span style={{ color: "#f9a8d4", fontWeight: "bold" }}> Rs.{product.newprice}</span>
            </p>
            <p>Size: {product.size}</p>
            <Row className="mb-3">
              <Col>
                <Form.Control as="select" defaultValue="30ml" style={{ width: "80px", borderRadius: "0px", border: "2px solid black", textAlign: "center" }}>
                  <option>30ml</option>
                </Form.Control>
              </Col>
            </Row>
            <p>Subtotal: Rs.{product.newprice}</p>
            <Row className="align-items-center justify-content-start mb-3" style={{ gap: "5px" }}>
              <Col xs="auto">
                <div className="d-flex border rounded px-2">
                  <Button variant="light" size="sm" style={{ background: "none", fontSize: "25px", border: "none" }}>−</Button>
                  <span className="px-3" style={{ fontSize: "20px", paddingTop: "10px" }}>1</span>
                  <Button variant="light" size="+" style={{ background: "none", fontSize: "25px", border: "none" }}>+</Button>
                </div>
              </Col>
              <Col xs="auto">
                <Button
                  onClick={handleShow}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fbb6ce";
                    e.target.style.color = "white";
                  }}
                  style={{
                    backgroundColor: "#fbb6ce",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "50px",
                    // padding: "10px",
                    width: "200px",
                    height: "40px",
                    transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
                  }}
                >
                  ADD TO CART
                </Button>

              </Col>
              <Col xs="auto">
                <span onClick={() => setFavorite(!favorite)} style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", border: "2px solid black", backgroundColor: favorite ? "black" : "white", transition: "0.3s" }}>
                  <FaHeart size={24} color={favorite ? "white" : "black"} />
                </span>
              </Col>
            </Row>
            <Row>
              <Col>

                <Link to="/checkout" state={{ product }}>

                  <Button onClick={handleBuyNow} style={{ backgroundColor: "#fbb6ce", color: "white", fontWeight: "bold", width: "100%", border: "none", borderRadius: "50px", padding: "10px" }}>
                    BUY IT NOW
                  </Button>

                </Link>

              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <h3 className="text-center text-black mb-4">RELATED PRODUCTS</h3><br />

        <div className="position-relative">
          {windowWidth >= 992 && (
            <>
              <Button
                className="position-absolute top-48 start-0 translate-middle-y bg-white text-black border-0 rounded-circle shadow"
                style={{ zIndex: 2, padding: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={handlePrev}
              >
                <FaChevronLeft size={20} />
              </Button>

              <Button
                className="position-absolute top-48 end-0 translate-middle-y bg-white text-black border-0 rounded-circle shadow"
                style={{ zIndex: 2, padding: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={handleNext}
              >
                <FaChevronRight size={20} />
              </Button>
            </>
          )}

          <Row className="g-3 justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-4">
            {Array.from({ length: visibleProducts }).map((_, i) => {
              const productIndex = (startIndex + i) % relatedProducts.length;
              const product = relatedProducts[productIndex];

              return (
                <Col key={i} className="d-flex">
                  <Card className="shadow-sm border-0 text-center flex-grow-1 d-flex flex-column" style={{ margin: "8px" }}>
                    <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1" style={{ fontSize: "12px", margin: "10px" }}>
                      Sale {product.discount}
                    </div>

                    <div style={{ width: "100%", height: imageHeight, overflow: "hidden" }}>
                      <Card.Img variant="top" src={product.img} alt={product.product_name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    <Card.Body className="d-flex flex-column flex-grow-1" style={{ gap: "3px", opacity: "1" }}>
                      <div>
                        <div className="d-flex justify-content-between align-items-center" style={{ fontSize: "14px", fontWeight: "bold" }}>
                          <span>{product.product_name}</span>
                          <span className="text-muted"><del>Rs. {product.oldprice}</del></span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-secondary" style={{ fontSize: "14px" }}>{product.sub_name}</span>
                          <span className="" style={{ fontWeight: "bold", fontSize: "18px", color: "#f9a8d4" }}>Rs.{product.newprice}</span>
                        </div>
                        <br></br>
                        <Button
                          className="fw-bold d-flex align-items-center justify-content-between text-white mt-auto px-3"
                          style={{ backgroundColor: "#f8a8c9", border: "none", padding: "10px", width: "100%" }}
                        >
                          <FaShoppingCart color="white" size={20} />
                          <span className="flex-grow-1 text-right">ADD TO CART</span>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>

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
                    src={product.img}
                    fluid
                    rounded
                  />
                </Col>
                <Col xs={8}>


                  <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: '600' }}>
                    {product.product_name}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ textDecoration: 'line-through', fontWeight: 'bold', fontSize: '16px', marginRight: '10px' }}>
                      Rs {product.oldprice}
                    </div>

                    <div style={{ fontSize: '17px', color: '#F8A8C2', fontWeight: 'bold' }}>
                      Rs  {product.newprice}
                    </div>
                  </div>

                  <br />

                  <div className="d-flex align-items-center border px-2" style={{ width: "fit-content", border: "1px solid #ccc", height: "38px" }}>
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
              {/* Buttons */}
              <Link to="/checkout" className="w-100" state={{ product }}>
                <Button onClick={handleBuyNow} className="w-100 mb-2" style={{ backgroundColor: '#F8A8C2', border: 'none', fontWeight: "bold" }}>
                  CHECKOUT
                </Button>
              </Link>

              <Link to="/CART" className="w-100" state={{ product }}>
                <Button onClick={handleBuyNow} className="w-100" style={{ backgroundColor: '#F8A8C2', border: 'none', fontWeight: "bold" }}>
                  VIEW CART
                </Button>
              </Link>

            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Description;
