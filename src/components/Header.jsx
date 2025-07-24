import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#f1cbff", // rosa pastel
        borderBottom: "3px solid #ffbdbd",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "#4a4a4a",
            fontSize: "1.7rem",
            fontWeight: "500",
          }}
        >
         Bienvenidos a mi Petshop
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

