import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  const fromInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(fromInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="" alt="" />
          </Col>
          <Col md={6}>
            <h2>Entre me contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primeiro nome"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Segundo nome"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Endereço de email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Telefone"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>

                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p className={status.success === false ? "dange" : "success"}>{status.message}</p>
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
