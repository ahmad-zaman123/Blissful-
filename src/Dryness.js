import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [
 
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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


function Dryness() {
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

export default Dryness ;
