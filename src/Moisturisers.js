import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [
 
  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/22_54443bb2-261d-441a-9cde-6f0d2bf64ad5.jpg?v=1738904108",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/22_54443bb2-261d-441a-9cde-6f0d2bf64ad5.jpg?v=1738904108",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04727_copy_6bfdbf99-085d-4c30-95c6-2e5a92b0e772.jpg?v=1738904108",
      "https://shopblissfulbeauty.com/cdn/shop/files/23_762ecc4a-8cdc-4d21-8206-f7713cb3365c.jpg?v=1738904108"
    ],
    oldprice: "1200.00",
    product_name: "Barrier Repair Moisturizer",
    newprice: "1020.00",
    discount: "15%",
    inStock: true,
    description:"Nourish and protect your skin with our Barrier Repair Moisturizer, this lightweight formula is created by the powerful blend of ceramides, hyaluronic acid, vitamin E, and aloe vera extract. Benefits Restores your skin’s natural barrier Deliver deep hydration, locks in moistureMakes your skin soft, smooth, and radiant.How To Use Deionized Water, Glycerin, Propylene Glycol,...",
    
  },

  {
    id: 2,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/1_8c0aca4d-6d91-457f-990a-6755f3f9fc17.jpg?v=1738904190",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/1_8c0aca4d-6d91-457f-990a-6755f3f9fc17.jpg?v=1738904190",
      "https://shopblissfulbeauty.com/cdn/shop/files/1_8c0aca4d-6d91-457f-990a-6755f3f9fc17.jpg?v=1738904190",
      "https://shopblissfulbeauty.com/cdn/shop/files/1_8c0aca4d-6d91-457f-990a-6755f3f9fc17.jpg?v=1738904190"
    ],
    oldprice: "1450.00",
    product_name: "Water Cream",
    newprice: "1082.00",
    discount: "15%",
    inStock: true,
    description:"Our Water Cream is an innovative gel moisturizer designed to provide deep and long-lasting hydration.Formulated with a unique blend of ingredients like Olive Squalane, Ceramide-III, and Sodium Hyaluronate, this water-based formula is perfect for sensitive and oily skin types, it leaves your skin feeling refreshed and revitalized.  BenefitsProvides long-lasting hydration Controls excess...",
    
  },

  {
    id: 3,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/DSC04942_3a73af53-27ee-4329-980e-d377c9719fd7.jpg?v=1738904184",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04943_99b13499-ba54-4577-8e58-267c0abd8895.jpg?v=1738904184",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04942_3a73af53-27ee-4329-980e-d377c9719fd7.jpg?v=1738904184",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04943_99b13499-ba54-4577-8e58-267c0abd8895.jpg?v=1738904184"
    ],
    oldprice: "2200.00",
      product_name: "Spring Water Spray",
      newprice: "1870.00",
    discount: "15%",
    inStock: true,
    description:"Deeply hydrate your skin with the smooth spritz of Thermal Spring Water Spray. This ultimate product tones your skin and keeps it refreshed throughout the day. This thermal spray is naturally rich in minerals that provide softening properties to your skin. This fragrance-free product is suitable for all skin types. Benefits Gently...",
    
  },


  

];


function Moisturisers () {
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

export default Moisturisers ;
