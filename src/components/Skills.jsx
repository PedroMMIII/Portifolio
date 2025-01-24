import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// img
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam quia. Minima voluptate odit exercitationem. Laboriosam natus, atque tenetur culpa nam nisi accusantium aperiam! Ipsum inventore tempora vel enim doloribus!</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
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
                                    <h5>Java Script</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter1} alt='Medidor de habilidade' />
                                    <h5>FrameWorks</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      );
}

export default Skills
