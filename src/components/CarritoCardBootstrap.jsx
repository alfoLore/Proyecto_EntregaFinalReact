{/*import { Card, Row, Col, Button } from "react-bootstrap";
{/*}
function CarritoCardBootstrap({ producto, funcionDisparadora }) {
    function borrarDelCarrito() {
        funcionDisparadora(producto.id);
    }

    return (
        <Card className="mb-3">
        <Card.Body>
            <Row className="align-items-center">
            <Col md={3}>
                <Card.Img
                variant="top"
                src={producto.imagen}
                style={{ maxHeight: "100px", objectFit: "cover", width: "100%" }}
                />
            </Col>
            <Col md={2}>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text className="text-muted">{producto.description}</Card.Text>
            </Col>
            <Col md={1}>
                <span>Cant: {producto.cantidad}</span>
            </Col>
            <Col md={2}>
                <span>Precio: {producto.price} $</span>
            </Col>
            <Col md={2}>
                <span>Subtotal: {producto.cantidad * producto.price} $</span>
            </Col>
            <Col md={2}>
                <Button variant="danger" onClick={borrarDelCarrito}>
                X
                </Button>
            </Col>
            </Row>
        </Card.Body>
        </Card>
    );
}

export default CarritoCardBootstrap;*/}

import { Card, Row, Col, Button } from "react-bootstrap";

function CarritoCardBootstrap({ producto, funcionDisparadora }) {
  function borrarDelCarrito() {
    funcionDisparadora(producto.id);
  }

  return (
    <Card
      className="mb-4 shadow-sm border-0 rounded-4"
      style={{ backgroundColor: "#fffafc" }}
    >
      <Card.Body>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.name}
              style={{
                maxHeight: "100px",
                objectFit: "cover",
                width: "100%",
                borderRadius: "1rem",
              }}
            />
          </Col>

          <Col xs={12} md={3}>
            <Card.Title
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#e49fc2",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              {producto.name}
            </Card.Title>
            <Card.Text
              className="text-muted"
              style={{ fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}
            >
              {producto.description}
            </Card.Text>
          </Col>

          <Col xs={4} md={2}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              Cant: <strong>{producto.cantidad}</strong>
            </span>
          </Col>

          <Col xs={4} md={2}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              Precio: <strong>${producto.price}</strong>
            </span>
          </Col>

          <Col xs={4} md={1}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
              <strong>${producto.cantidad * producto.price}</strong>
            </span>
          </Col>

          <Col xs={12} md={1} className="mt-2 mt-md-0 text-md-end">
            <Button
              variant="outline-danger"
              size="sm"
              onClick={borrarDelCarrito}
              style={{
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontWeight: "bold",
              }}
              title="Eliminar"
            >
              ×
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CarritoCardBootstrap;
