import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [

  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/8_09622dbd-e353-46a3-8adc-11e0676b8d11.jpg?v=1738904131",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/7_97e56dea-8024-4d9b-bb83-6809a3c588e3.jpg?v=1738904131",
      "https://shopblissfulbeauty.com/cdn/shop/files/8_09622dbd-e353-46a3-8adc-11e0676b8d11.jpg?v=1738904131",
      "https://shopblissfulbeauty.com/cdn/shop/files/7_97e56dea-8024-4d9b-bb83-6809a3c588e3.jpg?v=1738904131"
    ],
    oldprice: "2450.00",
      product_name: "Multi Peptide Serum",
      newprice: "2082.00",
    discount: "15%",
    inStock: true,
    description:"Transform your skin with our Multi-Peptide Serum, a lightweight, fast-absorbing formula infused with Centella Asiatica extract to target aging, soothe irritation, and reduce inflammation.Powered by Tri-Peptides, this serum deeply hydrates and restores elasticity while addressing fine lines and wrinkles. This magical serum also contains green tea and liquorice root extract...",
    
  },

  {
    id: 2,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/30_15049672-d38e-40e2-85b7-909bedda7fea.jpg?v=1738904121",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/30_15049672-d38e-40e2-85b7-909bedda7fea.jpg?v=1738904121",
      "https://shopblissfulbeauty.com/cdn/shop/files/31_b7e2e3a7-f9d1-48b8-b581-54500dbe3f26.jpg?v=1738904121",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04697_f34c7420-1150-4813-a0ce-2f019c29f5de.jpg?v=1738904121"
    ],
    oldprice: "2200.00",
    product_name: "Hyaluronic Acid",
    newprice: "1870.00",
    discount: "15%",
    inStock: true,
    description:"Our lightweight oil-free hyaluronic acid contains a blend of hyaluronic acid, ceramides, vitamin E, and aloe vera extract which deeply hydrates dry dehydrated skin and reduces the appearance of fine lines and wrinkles giving you healthy, radiant, bouncy skin. Ideal for skin prep before makeup. Benefits Deeply hydrates dry dehydrated skinReduces the...",
    
  },

  {
    id: 3,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/34_fd61c93b-976b-4e5e-acf1-d0073fa9976c.jpg?v=1738904126",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/34_fd61c93b-976b-4e5e-acf1-d0073fa9976c.jpg?v=1738904126",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04776_a000c775-1df4-493c-b778-34c4777ae797.jpg?v=1738904126",
      "https://shopblissfulbeauty.com/cdn/shop/files/33_3e7e9e01-ad14-4ff6-a20a-4212c62617cc.jpg?v=1738904126"
    ],
    oldprice: "2200.00",
    product_name: "Retinol",
    newprice: "1850.00",
    discount: "15%",
    inStock: true,
    description:"Perfect for both beginners and advanced users, our Retinol Serum is formulated with retinol, squalene oil, and vitamin E to deliver visible results without harsh irritation. Benefits  Improves skin texture and tone  Reduces fine lines and wrinkles  Stimulates collagen for firmer skin  Regenerate Skin Cell  Repairs sun damage   How To...",
    
  },

];


function HealthyAging() {
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
            <hr /><br /><br /><br />
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

export default HealthyAging ;
