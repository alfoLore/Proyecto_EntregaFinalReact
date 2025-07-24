

import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/MainBootstrap.css"; // Asegurate de tener este archivo para estilos personalizados



function MainBootstrap() {
  return (
    <Container className="my-5 main-container">
      <Row className="align-items-center">
        <Col xs={12} md={5} lg={4}>
          <div className="main-image-wrapper">
            <Image
              src="https://i.postimg.cc/YCY03RDT/imagen-perro-con-anteojos.jpg"
              alt="foto perro con anteojos"
              fluid
              className="main-image"
            />
          </div>
        </Col>
        <Col xs={12} md={7} lg={8}>
          <h2 className="main-title">Bienvenido a Nuestra Petshop</h2>
          <p className="main-text">
            Cuidamos a tus mascotas con productos de calidad, cariño y compromiso. Descubrí todo lo que tenemos para vos y tu mejor amigo.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap
