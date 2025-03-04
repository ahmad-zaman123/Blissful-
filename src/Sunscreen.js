import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [
 
  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/DSC04802_3aa831e0-77a6-4f10-9d59-0861fa4f4c83.jpg?v=1738904160",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04802_3aa831e0-77a6-4f10-9d59-0861fa4f4c83.jpg?v=1738904160",
      "https://shopblissfulbeauty.com/cdn/shop/files/12_063b00dc-76c6-44f8-9fe5-757aaf062bf8.jpg?v=1738904160",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04793_29e033e3-7bb8-47e8-bd16-6bf2a3840806.jpg?v=1738904160"
    ],
    oldprice: "1800.00",
    product_name: "Tinted Sunscreen",
    newprice: "1530.00",
    discount: "15%",
    inStock: true,
    description:"Protect your skin while achieving a healthy, radiant glow without the white cast. Our tinted sunscreen is non-greasy, perfect for sensitive skin, and seamlessly blends into all skin tones, leaving you with smooth, protected skin. Benefits Protection against harmful UV rays.Lightweight, non-greasy formula.No white cast; suitable for all skin types and tones.Boosts...",
    
  },

];


function Sunscreen() {
  const [filteredPriceRange, setFilteredPriceRange] = useState([0, 11521]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const navigate = useNavigate();

  const handlePriceChange = (priceRange, stockFilter) => {
    setFilteredPriceRange(priceRange);
    setInStockOnly(stockFilter);
  };

  const filteredProducts = productList.filter(
    (product) =>
      product.newprice >= filteredPriceRange[0] &&
      product.newprice <= filteredPriceRange[1] &&
      (!inStockOnly || product.inStock)
  );

  return (
    <Container fluid style={{ padding: "0" }}>
      <Row className="my-4 d-flex justify-content-around">
        <Col md={1} lg={1}></Col>
        <Col md={2} lg={2}>
          <br />
          <PriceBar onPriceChange={handlePriceChange} productList={productList} />
        </Col>
        <Col md={8} lg={8}>
          <Row>
            <hr className="hidden md:block" /><br /><br /><br />
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Col
                  key={index}
                  xs={6} sm={6} md={3} lg={3}
                  className="d-flex flex-column align-items-center mb-4"
                  onClick={() => navigate("/description", { state: product })} // 👈 Data pass ho raha hai
                  style={{ cursor: "pointer" }}
                >
                  <Items {...product} />
                  <br /><br />
                </Col>
              ))
            ) : (
              <Col className="text-center mt-4">
                <h5>No products found in this price range</h5>
              </Col>
            )}
          </Row>
          <br /><br />
        </Col>
        <Col md={1} lg={1}></Col>
      </Row>
    </Container>
  );
}

export default Sunscreen ;
