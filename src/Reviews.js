import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const testimonials = [
  {
    name: "Aisha Khan",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/sunscreen_300x300.png?v=1738908689",
    rating: 5,
    review: "I love how light and hydrating the moisturizer is. It doesn’t clog my pores, and my skin feels good all day."
  },
  {
    name: "Neha Rana",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/image-1_300x300.png?v=1732092732",
    rating: 5,
    review: "The face wash is the best product I’ve ever used. It cleanses deeply without drying out my skin. My family is hooked too!"
  },
  {
    name: "Maryam Salman",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/hyloronic_300x300.jpg?v=1738908715",
    rating: 5,
    review: "The natural ingredients are what drew me to this brand, and I’m so glad I tried it. My acne scars have faded significantly, Alhamdulillah."
  },
  {
    name: "Zainab Tariq",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/retinol_300x300.png?v=1738908667",
    rating: 5,
    review: "I have received so many compliments on my glowing skin since I started using these amazing products. Highly recommended!"
  },
  {
    name: "Aisha Khan",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/sunscreen_300x300.png?v=1738908689",
    rating: 5,
    review: "I love how light and hydrating the moisturizer is. It doesn’t clog my pores, and my skin feels good all day."
  },
  {
    name: "Neha Rana",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/image-1_300x300.png?v=1732092732",
    rating: 5,
    review: "The face wash is the best product I’ve ever used. It cleanses deeply without drying out my skin. My family is hooked too!"
  },
];

function TestimonialCarousel() {
  return (
    <Container fluid className="py-8">

<Row className="align-items-center">
        {/* First Empty Column (1 col) */}
        <Col xs={1}></Col>

        {/* OUR BEST SELLERS Text (10 col) */}
        <Col xs={10} style={{ color: "#f9a8d4", fontWeight: "bold", fontSize: "2.5rem", textAlign: "center" }}>
          BLISSFUL JOURNEY
        </Col>


        {/* Last Empty Column (1 col) */}
        <Col xs={1}></Col>
      </Row>

      <br />

      <Carousel indicators={false} controls interval={3000}>
        {[0, 2].map(index => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {testimonials.slice(index, index + 4).map((item, idx) => (
                <Col key={idx} xs={12} md={3} className="p-3">
                  <div 
                    className="bg-pink-300 text-center p-5 rounded-xl shadow-lg"
                    style={{ maxHeight: "470px" }} // All testimonials same height
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover  mx-auto mb-4"
                    />
                    <h5 className="font-bold text-white text-[27px]">{item.name}</h5>
                    <p className="text-white text-xl">{"★".repeat(item.rating)}</p>
                    <p className="text-md text-white">{item.review}</p>
                    <Button 
                      variant="light" 
                      className="mt-4 rounded-full px-5 py-2"
                      style={{ backgroundColor: "white", color: "#f9a8d4", fontWeight: "bold" }}
                    >
                      RECOMMENDED
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default TestimonialCarousel;
