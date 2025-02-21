import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '/src/assets/img/nav-icon1.svg';
import navIcon2 from '/src/assets/img/nav-icon2.svg';
import navIcon3 from '/src/assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="Linkedin" /></a>
              <a href=""><img src={navIcon2} alt="Github" /></a>
              <a href=""><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>&copy; 2025. Pedro Monteiro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
