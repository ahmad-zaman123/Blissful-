import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <Container fluid className="bg-pink-300 h-[50px] flex items-center">
      <Row className="w-full flex items-center justify-between px-4">
        {/* Left Side - Social Icons */}
        <Col xs={3} className="flex space-x-4">
          <a href ="https://api.whatsapp.com/send/?phone=%2B923331371383&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-xl cursor-pointer text-white" /></a>
          <a href ="https://www.facebook.com/blissfulbeautypakistan?mibextid=ZbWKwL"><FaFacebookF className="text-xl cursor-pointer text-white" /></a>
          <a href ="https://www.instagram.com/blissfulbeautypakistan/"><FaInstagram className="text-xl cursor-pointer text-white" /></a>
        </Col>

        {/* Center - Promo Text */}
        <Col xs={6} className="flex items-center justify-center h-full">
          <p className="text-white text-md font-medium leading-none mt-[10px]">
            Special Discounts are available on bundles
          </p>
        </Col>

        {/* Right Side - Search Bar with Icon */}
        <Col xs={3} className="flex justify-end relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 w-full max-w-[220px] h-[34px] border rounded-full focus:outline-none pr-10"
          />
          <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </Col>
      </Row>

    </Container>

    
  );
}

export default Header;