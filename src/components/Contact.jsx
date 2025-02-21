import { useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import imgContact from '../assets/img/contact-img.svg';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFormUpdate = useCallback((field, value) => {
    setFormDetails((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Limpa erro ao digitar
  }, []);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formDetails).forEach((key) => {
      if (!formDetails[key].trim()) {
        newErrors[key] = 'Este campo é obrigatório.';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setButtonText('Enviando...');
    setLoading(true);

    try {
      await emailjs.send('service_ls2y8do', 'template_av0vadj', formDetails, 'zi8GPEXXsVArkEryQ');
      setStatus({ success: true, message: 'E-mail enviado com sucesso!' });
      setFormDetails(formInitialDetails);
      setErrors({});
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus({ success: false, message: 'Erro ao enviar o e-mail.' });
    } finally {
      setButtonText('Send');
      setLoading(false);
    }
  };

  // Retorna o nome do campo
  const getFieldLabel = (field) => {
    const labels = {
      firstName: 'Primeiro Nome',
      lastName: 'Sobrenome',
      email: 'Email',
      phone: 'Telefone',
      message: 'Mensagem',
    };
    return labels[field] || field;
  };

  // Renderiza um campo de input ou textarea
  const renderInputField = (field) => {
    const isMessageField = field === 'message';
    return (
      <Col key={field} sm={isMessageField ? 12 : 6} className="px-1">
        <label htmlFor={field}>{getFieldLabel(field)}</label>
        {isMessageField ? (
          <textarea
            id={field}
            rows={6}
            value={formDetails[field]}
            placeholder={errors[field] || `Digite sua ${getFieldLabel(field)}`}
            className={errors[field] ? 'input-error' : ''}
            onChange={(e) => onFormUpdate(field, e.target.value)}
          />
        ) : (
          <input
            id={field}
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            value={formDetails[field]}
            placeholder={errors[field] || `Digite seu ${getFieldLabel(field)}`}
            className={errors[field] ? 'input-error' : ''}
            onChange={(e) => onFormUpdate(field, e.target.value)}
          />
        )}
        {errors[field] && <p className="error-text">{errors[field]}</p>}
      </Col>
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={imgContact} alt="Imagem ilustrativa de contato" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                {['firstName', 'lastName', 'email', 'phone', 'message'].map(renderInputField)}

                <Col className="px-1">
                  <button type="submit" disabled={loading}>
                    <span>{buttonText}</span>
                  </button>
                </Col>

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

      <style jsx>{`
        .input-error {
          border: 1px solid red;
        }
        .error-text {
          color: red;
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
