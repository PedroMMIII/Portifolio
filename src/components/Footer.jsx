import { Col, Container, Row } from 'react-bootstrap'; // Para o layout responsivo
import logo from '../assets/img/logo.svg'; // Logo do site
import navIcon1 from '/src/assets/img/nav-icon1.svg'; // Ícone de rede social (ex.: LinkedIn)
import navIcon2 from '/src/assets/img/nav-icon2.svg'; // Ícone de rede social (ex.: GitHub)
import navIcon3 from '/src/assets/img/nav-icon3.svg'; // Ícone de rede social (ex.: Instagram)

const Footer = () => {
  return (
    <footer className="footer"> {/* Elemento principal do rodapé */}
      <Container> {/* Container centralizado do Bootstrap */}
        <Row className="align-item-center"> {/* Linha para organizar os elementos lado a lado */}
          
          {/* Coluna para o logo */}
          <Col sm={6}> {/* Ocupa metade da largura em telas pequenas (sm) ou maiores */}
            <img src={logo} alt="Logo" /> {/* Exibe o logo */}
          </Col>

          {/* Coluna para ícones sociais e direitos autorais */}
          <Col sm={6} className="text-center text-sm-end"> {/* Centralizado em telas pequenas e alinhado à direita em telas maiores */}
            
            {/* Ícones de redes sociais */}
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="Linkedin" /></a> {/* Link para o LinkedIn */}
              <a href=""><img src={navIcon2} alt="Github" /></a> {/* Link para o GitHub */}
              <a href=""><img src={navIcon3} alt="Instagram" /></a> {/* Link para o Instagram */}
            </div>

            {/* Direitos autorais */}
            <p>&copy; 2025. Pedro Monteiro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
