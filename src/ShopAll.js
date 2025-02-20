import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [
  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/16_4baada09-1de9-4a47-afe0-e1f671b3dd43.jpg?v=1738904197",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/16_4baada09-1de9-4a47-afe0-e1f671b3dd43.jpg?v=1738904197",
      "https://shopblissfulbeauty.com/cdn/shop/files/15_f164d236-3564-4118-b717-5e58441a86d6.png?v=1738904197",
      "https://shopblissfulbeauty.com/cdn/shop/files/13_0e064ecf-16cf-4115-b582-5f2d078d1289.png?v=1738904197"
    ],
    oldprice: "2200.00",
    product_name: "Acne Serum",
    newprice: "1870.00",
    description:"Tackle stubborn acne, clear blackheads, and refine your pores with our powerful Acne Serum. Acne Serum is created from a carefully balanced blend of 1.5% Salicylic Acid, Glycolic Acid, and Niacinamide. This potent combination works to dissolve pore-clogging impurities, reduce inflammation, and promote the healing of acne marks for a clearer, healthier-looking complexion.",
    discount: "15%",
    inStock: true,
    size: "30ml"
  },

  {
    id: 2,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170"
    ],
    oldprice: "9000.00",
    product_name: "AM Skincare Bundle",
    newprice: "7350.00",
    discount: "15%",
    inStock: true,
    description:"Kickstart your morning with our AM Skincare Bundle, specifically tailored for those with dry, sensitive, and acne-prone skin. This comprehensive set provides everything you need for a nourishing start to the day, helping to soothe, hydrate, and protect your skin while addressing acne concerns gently. With a focus on barrier...",
    
  },

  {
    id: 3,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/barrier_916b7f93-3a24-4a0c-9084-bc58e8e70dc5.png?v=1738904187",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/barrier_916b7f93-3a24-4a0c-9084-bc58e8e70dc5.png?v=1738904187",
      "https://shopblissfulbeauty.com/cdn/shop/files/barrier_916b7f93-3a24-4a0c-9084-bc58e8e70dc5.png?v=1738904187",
      "https://shopblissfulbeauty.com/cdn/shop/files/barrier_916b7f93-3a24-4a0c-9084-bc58e8e70dc5.png?v=1738904187"
    ],
    oldprice: "7250.00",
    product_name: "Barrier Repair Bundle",
    newprice: "6162.00",
    discount: "15%",
    inStock: true,
    description:"Experience the ultimate skin revival with our Barrier Repair Bundle. Designed to strengthen, hydrate, and restore your skin’s natural defenses, this expertly curated set addresses the needs of sensitive and compromised skin barriers. Each product in this bundle works synergistically to enhance your skin’s resilience against environmental stressors, promoting a...",
    
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

  {
    id: 5,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149"
    ],
    oldprice: "1890.00",
    product_name: "Anti Aging",
    newprice: "1512.00",
    discount: "15%",
    inStock: true,
    description:"Unveil a youthful and revitalized complexion with our Anti-Aging Bundle, meticulously designed to combat the signs of aging. This powerful combination of skincare essentials works synergistically to reduce wrinkles, enhance firmness, and protect your skin from environmental damage. Tailored for those seeking to maintain a radiant, age-defying appearance, this bundle...",
    
  },

  {
    id: 6,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140",
      "https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140",
      "https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140"
    ],
    oldprice: "1890.00",
    product_name: "Teenage Skincare",
    newprice: "1512.00",
    discount: "15%",
    inStock: true,
    description:"Introducing our Teenage Skincare Bundle, specially designed to meet the unique skincare needs of teenagers. This simple yet effective trio of products focuses on gentle cleansing, essential hydration, and daily sun protection, providing a solid foundation for a healthy skincare routine. Whether dealing with hormonal changes, stress, or environmental factors,...",
    
  },

  {
    id: 7,
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
    id: 8,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle_23678226-5747-413a-a24c-36ceefcdcec5.png?v=1738904154",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle_23678226-5747-413a-a24c-36ceefcdcec5.png?v=1738904154",
      "https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle_23678226-5747-413a-a24c-36ceefcdcec5.png?v=1738904154",
      "https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle_23678226-5747-413a-a24c-36ceefcdcec5.png?v=1738904154"
    ],
    oldprice: "4000.00",
    product_name: "Bright and Glowing Skin",
    newprice: "3400.00",
    discount: "15%",
    inStock: true,
    description:"Illuminate your skin with our Bright and Glowing Skin Bundle, expertly crafted to enhance your skin's natural radiance while providing essential protection. This streamlined duo includes our high-performance Vitamin C Serum and a protective Sunscreen, making it perfect for anyone looking to achieve a luminous, even-toned complexion with minimal effort....",
    
  },

  {
    id: 9,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/24_bf5459f5-d450-4ed1-8eaa-c2562452826c.jpg?v=1738904114",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/24_bf5459f5-d450-4ed1-8eaa-c2562452826c.jpg?v=1738904114",
      "https://shopblissfulbeauty.com/cdn/shop/files/25_712de78f-0567-4b57-a28e-00e7c38e6fc7.jpg?v=1738904114",
      "https://shopblissfulbeauty.com/cdn/shop/files/DSC04567-2_copy_c2010dc4-7f53-464d-8ce5-2c30de1a9d25.jpg?v=1738904114"
    ],
    oldprice: "2200.00",
    product_name: "Brightening Serum",
    newprice: "1870.00",
    discount: "15%",
    inStock: true,
    description:"Get rid of dark spots and uneven skin tone with our 15% Vitamin C Brightening Serum. This powerful serum fights free radicals, reduces inflammation, and evens out your complexion.  This formula contains a stable formulation of ascorbic acid, ferulic acid, vitamin E, and sorbitol. Its silky, non-sticky, and fast-absorbing texture makes...",
    
  },

  {
    id: 10,
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
    id:11,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/Hydrated_and_Plump_Skin_Bundle_9a140e0a-39ac-428a-bc24-c66bc2d2fb63.jpg?v=1738904151",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/Hydrated_and_Plump_Skin_Bundle_9a140e0a-39ac-428a-bc24-c66bc2d2fb63.jpg?v=1738904151",
      "https://shopblissfulbeauty.com/cdn/shop/files/Hydrated_and_Plump_Skin_Bundle_9a140e0a-39ac-428a-bc24-c66bc2d2fb63.jpg?v=1738904151",
      "https://shopblissfulbeauty.com/cdn/shop/files/Hydrated_and_Plump_Skin_Bundle_9a140e0a-39ac-428a-bc24-c66bc2d2fb63.jpg?v=1738904151"
    ],
    oldprice: "7600.00",
    product_name: "Hydrated and Plump Skin",
    newprice: "6460.00",
    discount: "15%",
    inStock: true,
    description:"Drench your skin in deep hydration and achieve a plumper, smoother complexion with our Hydrated and Plump Skin Bundle. Specially formulated for those who desire a moisturized, bouncy texture, this bundle combines the most effective hydrating and rejuvenating products. Each product works in harmony to enhance skin elasticity, reduce fine...",
    
  },

  {
    id: 12,
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

  

];


function ShopAll() {
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

export default ShopAll;
