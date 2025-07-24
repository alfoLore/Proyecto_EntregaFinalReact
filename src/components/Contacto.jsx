import { Form, Button, Card } from "react-bootstrap";

function Contacto() {
  return (
    <Card className="p-4 my-4 shadow-sm" style={{ backgroundColor: "#fff", border: "1px solid #f1cbff", borderRadius: "1rem" }}>
      <h4 className="mb-4 text-center" style={{ color: "#4a4a4a", fontFamily: "'Poppins', sans-serif" }}>
        Formulario de Contacto
      </h4>
      <Form>
        <Form.Group controlId="formNombre" className="mb-3">
          <Form.Control type="text" placeholder="Nombre" style={{ borderRadius: "10px", borderColor: "#f1cbff" }} />
        </Form.Group>

        <Form.Group controlId="formMensaje" className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Mensaje" style={{ borderRadius: "10px", borderColor: "#f1cbff" }} />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-4">
          <Form.Control type="email" placeholder="Correo Electrónico" style={{ borderRadius: "10px", borderColor: "#f1cbff" }} />
        </Form.Group>

        <Button
          variant="light"
          className="w-100"
          style={{
            border: "1px solid #f1cbff",
            color: "#4a4a4a",
            fontWeight: "500",
            borderRadius: "10px",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          Enviar
        </Button>
      </Form>
    </Card>
  );
}

export default Contacto;
