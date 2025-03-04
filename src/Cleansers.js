import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [
 
  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/11_1e20a413-604b-4947-82ab-b2505096eed9.jpg?v=1738904100",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/11_1e20a413-604b-4947-82ab-b2505096eed9.jpg?v=1738904100",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04507_54834572-2cff-4a80-9233-4ffffe08551c.jpg?v=1738904100",
      "https://shopblissfulbeauty.com/cdn/shop/files/9_fbd2c9ef-9025-4a0f-bfea-33879af25bb8.jpg?v=1738904100"
    ],
    oldprice: "1550.00",
    product_name: "Hydrating Cleanser",
    newprice: "1317.00",
    discount: "15%",
    inStock: true,
    description:"Our Hydrating Cleanser effectively removes makeup, dirt, and debris while preserving your skin’s natural oils and protective barrier. Enriched with hyaluronic acid, ceramides, aloe vera extract, and vitamin E, this formula locks in moisture for soft, smooth, and hydrated skin.  Benefits Gently removes makeup, dirt, and debris Protects and maintains the skin’s moisture...",
    
  },

  {
    id: 2,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/17_4b34f309-ec5c-4872-9c5a-cfec44253df0.jpg?v=1738904166",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/17_4b34f309-ec5c-4872-9c5a-cfec44253df0.jpg?v=1738904166",
      "https://shopblissfulbeauty.com/cdn/shop/files/16_46be6441-c634-4835-8e39-b647141203b3.jpg?v=1738904166",
      "https://shopblissfulbeauty.com/cdn/shop/files/18_4051b47e-b1e1-4213-bd63-b964861f9e2f.jpg?v=1738904166"
    ],
    oldprice: "1750.00",
    product_name: "Barrier Repair Cleanser",
    newprice: "1487.00",
    discount: "15%",
    inStock: true,
    description:"Introducing our new Barrier Repair Cleanser, infused with a barrier-boosting blend of Centella Asciatica extract, Niacinamide, Ceramides, Hyaluronic Acid, Vitamin E, and Aloe extract. Crafted to cleanse and hydrate your skin while protecting and strengthening your skin's protective barrier. Perfect for dry, extremely dry, sensitive, and acne-prone skin. This fragrance-free formula...",
    
  },



  

];


function Cleansers() {
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

export default Cleansers ;
