{/*function About() {
    
    return (
      <section style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a nuestra tienda online. Nos especializamos en ofrecer
          productos de alta calidad a precios accesibles. Nuestro objetivo es
          brindarte una experiencia de compra simple, rápida y segura.
        </p>
        <p>
          Ya sea que estés buscando tecnología, ropa, accesorios o más, en
          nuestro e-commerce vas a encontrar lo que necesitás.
        </p>
      </section>
    );
  }
  
export default About;*/}
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm rounded-4 border-0" style={{ backgroundColor: "#fffafc" }}>
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{ color: "#e49fc2", fontWeight: "600", fontSize: "1.75rem", fontFamily: "'Poppins', sans-serif" }}>
                Sobre Nosotros
              </Card.Title>
              <Card.Text style={{ fontFamily: "'Poppins', sans-serif", color: "#5c5c5c", lineHeight: "1.6" }}>
                Bienvenido a nuestra tienda online de mascotas. Nos especializamos en ofrecer
                productos de alta calidad para perros y gatos.
                Nuestro objetivo es brindarte una experiencia de compra simple, rápida y segura.
              </Card.Text>
              <Card.Text style={{ fontFamily: "'Poppins', sans-serif", color: "#5c5c5c", lineHeight: "1.6" }}>
                Ya sea que estés buscando camitas, comederos, juguetes o accesorios con estilo,
                en nuestro PetShop vas a encontrar todo lo que tu mascota necesita .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About
