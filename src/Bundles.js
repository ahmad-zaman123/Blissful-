import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PriceBar from "./PriceBar";
import Items from "./Items"; // Assuming Items component renders products

const productList = [

  {
    id: 1,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149",
      "https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149"
    ],
    oldprice: "1890.00",
    product_name: "Anti Aging Bundle",
    newprice: "1512.00",
    discount: "15%",
    inStock: true,
    description:"Unveil a youthful and revitalized complexion with our Anti-Aging Bundle, meticulously designed to combat the signs of aging. This powerful combination of skincare essentials works synergistically to reduce wrinkles, enhance firmness, and protect your skin from environmental damage. Tailored for those seeking to maintain a radiant, age-defying appearance, this bundle...",
    
  },

  {
    id: 2,
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
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5.png?v=1738904143",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5.png?v=1738904143",
      "https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5.png?v=1738904143",
      "https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5.png?v=1738904143"
    ],
    oldprice: "9750.00",
    product_name: "Super Serum Bundle",
    newprice: "8487.00",
    description:"Elevate your skincare routine with our Super Serum Bundle, a powerful collection of high-performance serums each designed to target specific skin concerns. This bundle combines the brightening, hydrating, rejuvenating, and healing properties of our top serums, making it an essential toolkit for anyone looking to enhance their skin’s overall health...",
    discount: "15%",
    inStock: true,
  },

  {
    id: 5,
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
    id: 6,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134"
    ],
    oldprice: "9000.00",
    product_name: "AM Skincare Bundle (Oily)",
    newprice: "7350.00",
    discount: "15%",
    inStock: true,
    description:"Created especially for oily and combination skin, this bundle is perfect for your morning skincare routine. Start your day by providing essential care to your skin. Cleanse, hydrate, and protect your skin from harmful pollutants through our ultimate AM Skincare Bundle. This bundle contains five premium products that keep your...",
    
  },

  {
    id: 7,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170",
      "https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170"
    ],
    oldprice: "9000.00",
    product_name: "AM Skincare Bundle(Dry)",
    newprice: "7350.00",
    discount: "15%",
    inStock: true,
    description:"Kickstart your morning with our AM Skincare Bundle, specifically tailored for those with dry, sensitive, and acne-prone skin. This comprehensive set provides everything you need for a nourishing start to the day, helping to soothe, hydrate, and protect your skin while addressing acne concerns gently. With a focus on barrier...",
    
  },

  {
    id:8,
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
    id: 9,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Oily_and_Combination_Skin_e1d9b493-d956-4c13-86fe-9be218b407b7.jpg?v=1738904146",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Oily_and_Combination_Skin_e1d9b493-d956-4c13-86fe-9be218b407b7.jpg?v=1738904146",
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Oily_and_Combination_Skin_e1d9b493-d956-4c13-86fe-9be218b407b7.jpg?v=1738904146",
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Oily_and_Combination_Skin_e1d9b493-d956-4c13-86fe-9be218b407b7.jpg?v=1738904146"
    ],
    oldprice: "9300.00",
      product_name: "Mega Bundle (Oily)",
      newprice: "7800.00",
    discount: "15%",
    inStock: true,
    description:"With the power of seven powerful bundles, this Mega Bundle is perfectly crafted to meet the needs of oily and combination skin types. This bundle has the power to hydrate, cleanse, brighten, and protect your skin.  Say goodbye to dullness, excess oil, and uneven skin tone, and say hello to...",
    
  },  

  {
    id: 10,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle_2f191d81-ef79-4ca4-8b9d-3f880327c642.png?v=1738904137",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle_2f191d81-ef79-4ca4-8b9d-3f880327c642.png?v=1738904137",
      "https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle_2f191d81-ef79-4ca4-8b9d-3f880327c642.png?v=1738904137",
      "https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle_2f191d81-ef79-4ca4-8b9d-3f880327c642.png?v=1738904137"
    ],
    oldprice: "8200.00",
      product_name: "PM Skincare Bundle (Oily)",
      newprice: "7020.00",
    discount: "15%",
    inStock: true,
    description:"Tailored for oily and combination skin, this PM Skincare Bundle is designed to cleanse, treat, and nourish your skin overnight. With products that balance oil production, reduce breakouts, and enhance skin barrier health, this bundle ensures you wake up to a clearer, more balanced complexion.Included in the PM Skincare Bundle:Hydrating...",
    
  },  

  {
    id: 11,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_431e5ce7-4420-4d2e-9b87-35a16334a9b3.jpg?v=1738904174",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_431e5ce7-4420-4d2e-9b87-35a16334a9b3.jpg?v=1738904174",
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_431e5ce7-4420-4d2e-9b87-35a16334a9b3.jpg?v=1738904174",
      "https://shopblissfulbeauty.com/cdn/shop/files/Mega_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_431e5ce7-4420-4d2e-9b87-35a16334a9b3.jpg?v=1738904174"
    ],
    oldprice: "9300.00",
    product_name: "Mega Bundle (Dry)",
    newprice: "7800.00",
    discount: "15%",
    inStock: true,
    description:"The Mega Bundle is an all-encompassing skincare solution specifically designed for those with dry, sensitive, and acne-prone skin. This extensive collection of products is tailored to hydrate, soothe, protect, and rejuvenate your skin, addressing multiple concerns simultaneously. From deep hydration and barrier repair to brightening and anti-aging, this bundle offers...",
    
  },  

  {
    id: 12,
    img: "https://shopblissfulbeauty.com/cdn/shop/files/PM_Skincare_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_d2bb4464-7e32-4ea7-8f5e-5a563583e7f5.png?v=1738904180",
    images: [
      "https://shopblissfulbeauty.com/cdn/shop/files/PM_Skincare_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_d2bb4464-7e32-4ea7-8f5e-5a563583e7f5.png?v=1738904180",
      "https://shopblissfulbeauty.com/cdn/shop/files/PM_Skincare_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_d2bb4464-7e32-4ea7-8f5e-5a563583e7f5.png?v=1738904180",
      "https://shopblissfulbeauty.com/cdn/shop/files/PM_Skincare_Bundle_Dry_Sensitive_and_Acne_Prone_Skin_d2bb4464-7e32-4ea7-8f5e-5a563583e7f5.png?v=1738904180"
    ],
    oldprice: "8200.00",
      product_name: "PM Skincare Bundle (Dry)",
      newprice: "7020.00",
      discount: "15%",
    inStock: true,
    description:"This PM Skincare Bundle is curated for those with dry, sensitive, and acne-prone skin, focusing on gentle cleansing, intensive moisturization, and targeted acne treatment. It nurtures the skin while addressing sensitivity and hydration needs, allowing you to achieve a calmer, more radiant complexion by morning. Included in the PM Skincare...",
    
  },  

];


function Bundles() {
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

export default Bundles;
