import { useState, useEffect } from "react"; // Importando os hooks useState e useEffect do React
import { Navbar, Container, Nav } from "react-bootstrap"; // Importando componentes do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/src/assets/img/logo.svg'; // Importando imagem do logo
import navIcon1 from '/src/assets/img/nav-icon1.svg'; // Importando ícone de rede social 1
import navIcon2 from '/src/assets/img/nav-icon2.svg'; // Importando ícone de rede social 2
import navIcon3 from '/src/assets/img/nav-icon3.svg'; // Importando ícone de rede social 3

// Componente Navbar
const NavBar = () => {
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

  // Navbar principal
// Navbar principal
return (
  <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    {/* Container centralizado */}
    <Container className="d-flex justify-content-center">
      {/* Logo que redireciona para a página inicial */}
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      
      {/* Botão para toggle do menu */}
      <Navbar.Toggle aria-controls="navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      
      {/* Menu colapsável */}
      <Navbar.Collapse id="navbar-nav">
        {/* Links centralizados com espaçamento */}
        <Nav className="me-auto justify-content-center gap-3">
          {/* Link para a seção Home */}
          <Nav.Link
            href="#home"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          
          {/* Link para a seção Habilidades */}
          <Nav.Link
            href="#skills"
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('skills')}
          >
            Habilidades
          </Nav.Link>
          
          {/* Link para a seção Projetos */}
          <Nav.Link
            href="#projects"
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}
          >
            Projetos
          </Nav.Link>
        </Nav>
        
        {/* Ícones sociais e botão alinhados */}
        <span className="navbar-text d-flex align-items-center">
          {/* Ícones sociais */}
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="Ícone Social 1" /></a>
            <a href="https://github.com/PedroMMIII" target="_blank"><img src={navIcon2} alt="Ícone Social 2" /></a>
            <a href="https://www.instagram.com/itspedromonteiro?igsh=aXFocHYyaTVtNjRw" target="_blank" ><img src={navIcon3} alt="Ícone Social 3" /></a>
          </div>
          
          {/* Botão para conexão */}
          <a href="#connect">
            <button className="vvd">
              <span>Vamos nos conectar</span>
            </button>
          </a>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default NavBar;
