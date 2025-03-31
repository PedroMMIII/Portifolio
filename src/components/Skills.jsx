import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'; // Layout responsivo
import Carousel from "react-multi-carousel"; // Biblioteca de carrossel responsivo
import "react-multi-carousel/lib/styles.css"; // Estilos do carrossel

// Imagens usadas nos medidores de habilidades e plano de fundo
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  // Configuração responsiva para o carrossel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 }, // Telas muito grandes
      items: 5 // Mostra 5 itens
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 }, // Desktops padrão
      items: 3 // Mostra 3 itens
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 }, // Tablets
      items: 2 // Mostra 2 itens
    },
    mobile: {
      breakpoint: { max: 464, min: 0 }, // Celulares
      items: 1 // Mostra 1 item
    }
  };

  return (
    <section className='skill' id='skills'> {/* Seção principal para navegação e estilização */}
      <Container> {/* Contêiner do Bootstrap para centralizar o conteúdo */}
        <Row>
          <Col>
            <div className="skill-bx"> {/* Caixa que engloba o conteúdo das habilidades */}
              <h2>Habilidades</h2> {/* Título da seção */}
              <p>Lorem ipsum...</p> {/* Descrição fictícia */}
              
              {/* Carrossel de habilidades */}
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                {/* Cada item representa uma habilidade */}
                <div className='item'>
                  <img src={meter1} alt='Medidor de habilidade' />
                  <h5>HTML5</h5>
                </div>

                <div className='item'>
                  <img src={meter2} alt='Medidor de habilidade' />
                  <h5>CSS</h5>
                </div>

                <div className='item'>
                  <img src={meter3} alt='Medidor de habilidade' />
                  <h5>JavaScript</h5>
                </div>

                <div className='item'>
                  <img src={meter1} alt='Medidor de habilidade' />
                  <h5>Frameworks</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Imagem de fundo decorativa */}
      <img className='background-image-left' src={colorSharp} alt="Fundo decorativo" />
    </section>
  );
};

export default Skills;
