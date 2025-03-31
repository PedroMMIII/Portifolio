import React from 'react';
import ProjectCard from './ProjectCard'; // Componente para exibir detalhes de cada projeto
import colorSharp2 from '../assets/img/color-sharp2.png'; // Imagem de fundo decorativa
import projImg1 from '../assets/img/project-img1.png'; // Imagens dos projetos
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'; // Layout e navegação

const Projects = () => {
  // Lista de projetos com título, descrição e imagem
  const projects = [
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg1,
    },
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg2,
    },
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg3,
    },
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg1,
    },
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg2,
    },
    {
      title: 'Barbearia',
      description: 'Landing page de um site de barbearia criado usando HTML, Sass, JavaScript',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project">
      {' '}
      {/* Seção principal de projetos */}
      <Container>
        {' '}
        {/* Layout centralizado com Bootstrap */}
        <Row>
          <Col>
            <h2>Projetos</h2> {/* Título da seção */}
            <p>Lorem ipsum...</p> {/* Descrição fictícia */}
            {/* Navegação por abas usando react-bootstrap */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* Navegação entre as abas */}
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" id="projects-tabs-tab-first">
                    Option 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="projects-tabs-tab-second">
                    Option 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third">
                    Option 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Conteúdo das abas */}
              <Tab.Content>
                {/* Primeira aba exibe os projetos */}
                <Tab.Pane eventKey="first">
                  <Row>
                    {/* Mapeia e renderiza os projetos usando o componente ProjectCard */}
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} /> // Passa props (title, description, imgUrl)
                    ))}
                  </Row>
                </Tab.Pane>

                {/* Conteúdo fictício nas outras abas */}
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* Imagem decorativa no fundo */}
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;
