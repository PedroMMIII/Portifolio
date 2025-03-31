import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import imgContact from '../assets/img/contact-img.svg';

const Contact = () => {
  // Estado inicial do formulário
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  // Estados para armazenar os dados do formulário e erros
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para atualizar o valor dos campos do formulário
  const onFormUpdate = (field, value) => {
    setFormDetails((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Limpa o erro do campo ao digitar
  };

  // Função simples para validar o formulário
  const validateForm = () => {
    const newErrors = {};

    // Valida se os campos estão vazios
    if (!formDetails.firstName.trim()) newErrors.firstName = 'Por favor, digite seu primeiro nome.';
    if (!formDetails.lastName.trim()) newErrors.lastName = 'Por favor, digite seu sobrenome.';
    if (!formDetails.email.trim()) {
      newErrors.email = 'Por favor, digite seu e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      // Validação simples de e-mail usando regex
      newErrors.email = 'Por favor, digite um e-mail válido.';
    }
    if (!formDetails.phone.trim()) newErrors.phone = 'Por favor, digite seu telefone.';
    if (!formDetails.message.trim()) newErrors.message = 'Por favor, escreva uma mensagem.';

    setErrors(newErrors); // Atualiza os erros no estado

    // Se não houver erros, retorna true
    return Object.keys(newErrors).length === 0;
  };

  // Função que lida com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar

    // Se o formulário não for válido, interrompe o envio
    if (!validateForm()) return;

    setButtonText('Enviando...'); // Atualiza texto do botão
    setLoading(true); // Ativa o loading

    try {
      // Envia o formulário usando emailjs
      await emailjs.send('service_ls2y8do', 'template_av0vadj', formDetails, 'zi8GPEXXsVArkEryQ');
      setStatus({ success: true, message: 'E-mail enviado com sucesso!' });
      setFormDetails(formInitialDetails); // Limpa o formulário após envio
      setErrors({}); // Limpa os erros
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus({ success: false, message: 'Erro ao enviar o e-mail.' });
    } finally {
      setButtonText('Send'); // Restaura o texto do botão
      setLoading(false); // Desativa o loading
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* Imagem ilustrativa */}
            <img src={imgContact} alt="Imagem ilustrativa de contato" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                {/* Primeiro Nome */}
                <Col sm={6} className="px-1">
                  <label htmlFor="firstName">Primeiro Nome</label>
                  <input
                    id="firstName"
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Digite seu primeiro nome"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    className={errors.firstName ? 'input-error' : ''}
                  />
                  {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                </Col>

                {/* Sobrenome */}
                <Col sm={6} className="px-1">
                  <label htmlFor="lastName">Sobrenome</label>
                  <input
                    id="lastName"
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Digite seu sobrenome"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    className={errors.lastName ? 'input-error' : ''}
                  />
                  {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                </Col>

                {/* E-mail */}
                <Col sm={6} className="px-1">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Digite seu e-mail"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </Col>

                {/* Telefone */}
                <Col sm={6} className="px-1">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Digite seu telefone"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </Col>

                {/* Mensagem */}
                <Col sm={12} className="px-1">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formDetails.message}
                    placeholder="Escreva sua mensagem"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </Col>

                {/* Botão de Envio */}
                <Col className="px-1">
                  <button type="submit" disabled={loading}>
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {/* Mensagem de status após o envio */}
                {status && (
                  <Col>
                    <p className={status.success ? 'success' : 'danger'}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
