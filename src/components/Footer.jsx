{/*function Footer() {  
    return (  
        <footer style={{ backgroundColor: "#f1f1f1", padding: "10px", textAlign: "center", marginTop: "30px", color:"black" }}>  
            <p>&copy; 2025 - Mi Aplicación React</p>  
        </footer>  
    );  
}  

export default Footer; */} 

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fffafc",
        padding: "30px 0",
        color: "#7d6e83",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.95rem",
        borderTop: "1px solid #f3f3f3",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: "600" }}>PetShop Alfonso</h5>
            <p>Tu tienda online  para mimar a tus mascotas.</p>
            
            <p>
              <FaEnvelope style={{ marginRight: "6px" }} />
              contacto@petshopalfonso.com
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h6 style={{ fontWeight: "600" }}>Enlaces útiles</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="footer-link">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="footer-link">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="footer-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 style={{ fontWeight: "600" }}>Seguinos</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:contacto@petshopalfonso.com"
                className="social-icon"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#f1e6eb" }} />
        <p className="text-center" style={{ fontSize: "0.85rem", color: "#a59eab" }}>
          &copy; 2025 - PetShop Alfonso |  by Lorena
        </p>
      </Container>

      <style>{`
        .footer-link {
          color: #7d6e83;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #e49fc2;
        }

        .social-icon {
          color: #7d6e83;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icon:hover {
          color: #e49fc2;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
