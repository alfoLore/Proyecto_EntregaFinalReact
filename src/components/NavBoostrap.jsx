{/*import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";

function NavBoostrap() {
  const { productosCarrito } = useContext(CarritoContext);
  const { admin } = useAuthContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PetShop Alfonso
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-principal" />
        <Navbar.Collapse id="nav-principal">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            {admin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
            {admin && <Nav.Link as={Link} to="/admin/agregarProductos">Agregar productos</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/carrito">
              <FaShoppingCart style={{ marginRight: "5px" }} />
              {productosCarrito.length > 0 && (
                <Badge bg="light" text="dark">{productosCarrito.length}</Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBoostrap;*/}

import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";

function NavBoostrap() {
  const { productosCarrito } = useContext(CarritoContext);
  const { admin } = useAuthContext();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: "#fffafc", // fondo pastel rosado claro
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        fontFamily: "'Poppins', sans-serif",
        borderBottom: "1px solid #f3f3f3",
      }}
      className="rounded-bottom"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "#e49fc2",
            fontWeight: "600",
            fontSize: "1.5rem",
          }}
        >
          🐶 PetShop Alfonso
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-principal" />

        <Navbar.Collapse id="nav-principal">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#5c5c5c" }}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" style={{ color: "#5c5c5c" }}>
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" style={{ color: "#5c5c5c" }}>
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" style={{ color: "#5c5c5c" }}>
              Contacto
            </Nav.Link>
            {admin && (
              <Nav.Link as={Link} to="/admin" style={{ color: "#7d6e83" }}>
                Admin
              </Nav.Link>
            )}
            {admin && (
              <Nav.Link as={Link} to="/admin/agregarProductos" style={{ color: "#7d6e83" }}>
                Agregar productos
              </Nav.Link>
            )}
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/carrito" className="d-flex align-items-center">
              <FaShoppingCart style={{ marginRight: "8px", color: "#e49fc2" }} size={18} />
              {productosCarrito.length > 0 && (
                <Badge
                  bg="light"
                  text="dark"
                  className="rounded-pill"
                  style={{
                    fontSize: "0.75rem",
                    padding: "4px 8px",
                    border: "1px solid #e49fc2",
                  }}
                >
                  {productosCarrito.length}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/login" style={{ color: "#7d6e83" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBoostrap;

