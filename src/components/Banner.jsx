import { useState, useEffect } from "react"; // Importando hooks useState e useEffect do React
import { Col, Container, Row } from "react-bootstrap"; // Importando componentes do Bootstrap
import { FiArrowRight } from "react-icons/fi"; // Importando o ícone ArrowRightCircle do react-icons
import headerImg from "../assets/img/header-img.svg"; // Importando imagem do cabeçalho

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // Estado para controlar o índice da frase a ser exibida
    const [isDeleting, setIsDeleting] = useState(false); // Estado para controle de deletar texto
    const toRotate = ["Pedro Monteiro", "Desenvolvedor Front-End", "Especialista em UI"]; // Lista de profissões a serem rotacionadas
    const [text, setText] = useState(''); // Estado para o texto exibido
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Estado para o tempo entre digitação dos textos
    const period = 200; // Período de rotação em milissegundos

    useEffect(() => {
        let ticker = setInterval(() => { // Cria um intervalo para atualizar o texto
            tick();
        }, delta);

        return () => { clearInterval(ticker); }; // Limpa o intervalo ao desmontar o componente
    }, [text]); // Dependência do useEffect é o estado 'text'

    const tick = () => {
        let i = loopNum % toRotate.length; // Calcula o índice do texto atual em `toRotate`.
        let fullText = toRotate[i]; // Obtém o texto completo correspondente ao índice.
    
        // Adiciona ou remove caracteres dependendo do estado de `isDeleting`.
        let updateText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);
    
        setText(updateText); // Atualiza o texto exibido.
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // Acelera a deleção.
        }
    
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true); // Inicia a deleção quando o texto completo for exibido.
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false); // Para a deleção ao apagar tudo.
            setLoopNum(loopNum + 1); // Passa ao próximo texto.
            setDelta(500); // Define uma pausa antes de começar o próximo texto.
        }
    };
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu Portfólio</span>
                        <h1>{`Olá, eu sou `}<span>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsum provident. Quam aliquid accusamus possimus dignissimos repudiandae quaerat, harum blanditiis hic suscipit error assumenda nihil quibusdam maxime dolor cum aut.</p>
                        <button onClick={() => console.log('conectando')}>
                            Vamos conectar <FiArrowRight size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
