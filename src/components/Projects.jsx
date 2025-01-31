import React from 'react';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg1,     
        },
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg2,   
        },
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg3,    
        },
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg1,     
        },
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg2,     
        },
        {
            title: "Barbearia",
            description: "Landing page de um site de barbearia criado usando HTML, Sass, JavaScript",
            imgUrl: projImg3,     
        }
    ];

    return (
        <section className="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, accusantium? Molestiae ipsum vitae, voluptatem magnam sequi veritatis quam maiores consequatur harum exercitationem fugit tenetur, architecto nostrum libero reprehenderit dolore cupiditate!</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" id="projects-tabs-tab-first">Option 1</Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" id="projects-tabs-tab-second">Option 2</Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" id="projects-tabs-tab-third">Option 3</Nav.Link> 
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum </Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Background" />
        </section>
    );
};

export default Projects;
