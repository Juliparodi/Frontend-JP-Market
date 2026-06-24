import { Container, Row, Col, Image } from 'react-bootstrap';
import './aboutUs.css';
import aboutUsImage from './about-us-image.jpg'

const AboutUs = () => {
  return (
      <div>
        <Container fluid className="about-us-container">
          <Row className="about-us-header">
            <Col>
              <h1>About Us</h1>
            </Col>
          </Row>
          <Row className="about-us-body">
            <Col md={6}>
              <Image className="about-us-image" src={aboutUsImage}/>
            </Col>
            <Col md={6}>
              <p>We are a team of dedicated professionals committed to delivering high-quality products and services to our customers.</p>
              <p>Our mission is to provide innovative solutions that meet the evolving needs of our clients and contribute to their success.</p>
              <p>At our core, we believe in building strong relationships with our customers, employees, and partners, and creating a culture of excellence and continuous improvement.</p>
              <p>Thank you for choosing us as your trusted partner.</p>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default AboutUs;
