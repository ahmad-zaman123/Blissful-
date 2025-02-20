import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from './Product'

function ProductBar() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 d-flex justify-content-around">
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product 
            img='https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle_36720b19-8331-4638-a180-b052a638548c.png?v=1738904149' 
            oldprice='1,890.00'
            product_name='Anti Aging Bundle' 
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle_d423fd86-fc68-4829-ae67-7e90a22441d2.png?v=1738904140'  
            oldprice='1,890.00' 
            product_name='Teenage Skincare Bundle'
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/barrier_916b7f93-3a24-4a0c-9084-bc58e8e70dc5.png?v=1738904187'  
            oldprice='1,890.00' 
            product_name='Barrier Repair Bundle'
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1_0009e064-395b-4cbb-bb17-e833d69be0b5.png?v=1738904143'  
            oldprice='1,890.00'
            product_name='Super Serum Bundle' 
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
      </Row>
<br />

      <Row className="my-4 d-flex justify-content-around">
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product 
            img='https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle_23678226-5747-413a-a24c-36ceefcdcec5.png?v=1738904154' 
            oldprice='1,890.00'
            product_name='Bright Glowing Bundle' 
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2_c0484b7c-0bc4-420d-a2b8-e22d1f93e44f.png?v=1738904134'  
            oldprice='1,890.00' 
            product_name='AM Skincare Bundle'
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin_9dd5e3dc-38a1-4a96-8fb5-7ae945e3a65a.jpg?v=1738904170'  
            oldprice='1,890.00' 
            product_name='AM Skincare Bundle'
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://shopblissfulbeauty.com/cdn/shop/files/Hydrated_and_Plump_Skin_Bundle_9a140e0a-39ac-428a-bc24-c66bc2d2fb63.jpg?v=1738904151'  
            oldprice='1,890.00'
            product_name='Hydrated Plump Bundle' 
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductBar;
