import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        {/* Container da navegação */}
        <Container>
          {/* Logo da navegação */}
          <Navbar.Brand href="#home"> <img src={''} alt="Logo" /> </Navbar.Brand>
          {/* icone da navegação */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* Links de navegação */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                Habilidades
              </Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>
                Projetos
              </Nav.Link>
              {/* End Links de navegação */}
            </Nav>
            {/* Icones das redes sociais */}
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"> <img src={''} alt="" /></a>
                    <a href="#"> <img src={''} alt="" /></a>
                    <a href="#"> <img src={''} alt="" /></a>
                </div>
            {/* End Icones das redes sociais */}
                <button className="vvd" onClick={ () => console.log('connect') }> <span>Vamos nos conectar</span> </button>
            </span>
          </Navbar.Collapse>
        </Container>
         {/* End Container da navegação */}
      </Navbar>
      // End Navegação do site
    );
}

export default NavBar