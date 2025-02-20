import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function OurBestSeller() {
  return (
    <>
    <Container>
      <Row className="align-items-center">
        {/* First Empty Column (1 col) */}
        <Col xs={1}></Col>

        {/* OUR BEST SELLERS Text (10 col) */}
        <Col xs={10} style={{ color: "#f9a8d4", fontWeight: "bold", fontSize: "2.5rem", textAlign: "center" }}>
          OUR BEST SELLERS
        </Col>


        {/* Last Empty Column (1 col) */}
        <Col xs={1}></Col>
      </Row>

      <br />
    </Container>

<Container>
{/* 🖥️ Large Screens Layout */}
<Row className="align-items-start d-none d-lg-flex">
  {/* Empty Column */}
  <Col xs={6} sm={6}  lg={1} md={1} ></Col>

  {/* First Image */}

  <Col xs={6} sm={6}  lg={10} md={10} >

  <Row className="align-items-start d-none d-lg-flex">
  
  <Col xs={6} sm={6}  lg={4} md={4}  className="d-flex flex-column align-items-center">
    <div style={{ position: "relative", width: "100%" }}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0721/8639/6974/files/best_seller_barrier_repair.jpg?v=1731912589"
        style={{
          height: "570px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          backgroundColor: "#6a0dad",
          color: "white",
          textAlign: "left", // Left-aligned text
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "left", // Left-align text
          paddingLeft: "18px", // Left padding
          
          fontWeight: "bold",
          fontSize: "1.2rem", // Increased font size
          padding: "10px",
          borderRadius: "10px",
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "60px",
        }}
      >
        Barrier Repair Moisturiser
      </div>
    </div>
  </Col>

  {/* Two Images Section */}
  <Col xs={6} sm={6}  lg={4} md={4}  className="d-flex flex-column">
    <div style={{ position: "relative", marginBottom: "10px" }}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0678/2517/2643/files/12_e98ea999-9e1d-437d-be4c-2d8dbdeddcdc.jpg?v=1736224937"
        style={{
          height: "290px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          backgroundColor: "#f4a261",
          color: "white",
          textAlign: "left", // Left-aligned text
          fontWeight: "bold",
          fontSize: "1.2rem", // Increased font size
          padding: "10px",
          borderRadius: "10px",
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "left", // Left-align text
          paddingLeft: "18px", // Left padding
        }}
      >
        Tinted Sunscreen
      </div>
    </div>

    <div style={{ position: "relative" }}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0678/2517/2643/files/26.png?v=1736225073"
        style={{
          height: "290px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          backgroundColor: "#f4a261",
          color: "white",
          textAlign: "left", // Left-aligned text
          fontWeight: "bold",
          fontSize: "1.2rem", // Increased font size
          padding: "10px",
          borderRadius: "10px",
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "left", // Left-align text
          paddingLeft: "18px", // Left padding
        }}
      >
        Vitamin C Serum
      </div>
    </div>
  </Col>

  {/* Pink Box + GIF Section */}
  <Col xs={6} sm={6}  lg={4} md={4}  className="d-flex flex-column">
    {/* SHOP NOW Button Section */}
    <div
      style={{
        height: "290px",
        position: "relative",
        borderRadius: "20px",
        marginBottom: "10px",
        backgroundColor: "#f9a8d4", // Pink Background
      }}
    >

<Link to="/SHOPALL" >

      <Button
        style={{
          position: "absolute",
          left: "20px",
          bottom: "20px",
          color: "white", // White text
          fontSize: "1.5rem",
          fontWeight: "bold",
          border: "none",
          padding: "12px 24px",
          backgroundColor: "#f9a8d4", // Pink Button
          borderRadius: "10px",
        }}
      >
        SHOP NOW →
      </Button>
      </Link>
    </div>

    {/* GIF Image (Centered) */}
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "290px" 
      }}
    >
      <Image
        src="https://cdn.shopify.com/s/files/1/0678/2517/2643/files/blissfull_animation_cdb43ffc-3bd4-4d3a-8c58-22cf1f966dda.gif?v=1736398441"
        style={{
          display : "block",
          width: "50%",
        }}
      />
    </div>
  </Col>
  </Row>
  </Col>

  {/* Empty Column */}
  <Col lg={1} md={1} ></Col>
</Row>
</Container>
</>
  );
}

export default OurBestSeller;
