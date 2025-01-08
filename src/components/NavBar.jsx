import { useState, useEffect } from "react"; // Importando os hooks useState e useEffect do React
import { Navbar, Container, Nav } from "react-bootstrap"; // Importando componentes do Bootstrap
import logo from '/src/assets/img/logo.svg'; // Importando imagem do logo
import navIcon1 from '/src/assets/img/nav-icon1.svg'; // Importando ícone de rede social 1
import navIcon2 from '/src/assets/img/nav-icon2.svg'; // Importando ícone de rede social 2
import navIcon3 from '/src/assets/img/nav-icon3.svg'; // Importando ícone de rede social 3

// Componente Navbar
export const NavBar = () => {
  // Estado para o link ativo
  const [activeLink, setActiveLink] = useState('home');
  // Estado para verificar se a página foi rolada
  const [scrolled, setScrolled] = useState(false);

  // Hook useEffect para monitorar o scroll da página
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { // Quando o scroll ultrapassa 50px, o estado scrolled é atualizado
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Adicionando evento de scroll ao window
    window.addEventListener('scroll', onScroll);

    // Removendo evento de scroll ao desmontar o componente
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // Dependências vazias para executar apenas no montamento

  // Função para atualizar o link ativo
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> {/* Navbar com classe "scrolled" quando estiver rolando */}
      <Container>
        <Navbar.Brand href="#home"> {/* Logo que redireciona para a página inicial */}
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"> {/* Botão para toggle do menu */}
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav"> {/* Menu colapsável */}
          <Nav className="me-auto">
            <Nav.Link // Link para a seção Home
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link // Link para a seção Habilidades
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link // Link para a seção Projetos
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Ícone Social 1" /></a>
              <a href="#"><img src={navIcon2} alt="Ícone Social 2" /></a>
              <a href="#"><img src={navIcon3} alt="Ícone Social 3" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}> {/* Botão para conexão */}
              <span>Vamos nos conectar</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
