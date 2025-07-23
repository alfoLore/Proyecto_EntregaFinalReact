{/*import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { AuthContext, useAuthContext } from "../contexts/AuthContext.jsx";
import CarritoCardBootstrap from "./CarritoCardBootstrap";*/}
{/*}
function CarritoBootstrap() {
    const {user} = useContext(AuthContext);
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad,
        0
    );

    function funcionDisparadora(id) {
        borrarProductoCarrito(id);
    }

    function funcionDisparadora2() {
        vaciarCarrito();
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <Container className="my-4">
        <h2 className="mb-3">Carrito de compras</h2>
        <Button variant="warning" className="mb-4" onClick={funcionDisparadora2}>
            Vaciar carrito
        </Button>

        {productosCarrito.length > 0 ? (
            productosCarrito.map((producto) => (
            <CarritoCardBootstrap
                key={producto.id}
                producto={producto}
                funcionDisparadora={funcionDisparadora}
            />
            ))
        ) : (
            <p>Carrito vacío</p>
        )}

        {total > 0 && (
            <h4 className="mt-4 text-end">Total a pagar: {total.toFixed(2)} $</h4>
        )}
        </Container>
    );
}

export default CarritoBootstrap;*/}
import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { AuthContext } from "../contexts/AuthContext";
import CarritoCardBootstrap from "./CarritoCardBootstrap";
import { BsCartX } from "react-icons/bs";
import sadDogImage from "../assets/caniche.jpeg"; // <-- pon tu imagen aquí en assets

function CarritoBootstrap() {
  const { user } = useContext(AuthContext);
  const { productosCarrito, vaciarCarrito, borrarProductoCarrito } =
    useContext(CarritoContext);

  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.price * producto.cantidad,
    0
  );

  function funcionDisparadora(id) {
    borrarProductoCarrito(id);
  }

  function funcionDisparadora2() {
    vaciarCarrito();
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container className="my-4">
      <Row className="align-items-center mb-3">
        <Col className="d-flex justify-content-start gap-2">
          <Link to="/productos">
            <Button
              size="sm"
              style={{
                backgroundColor: "white",
                border: "1px solid pink",
                color: "#333",
                fontSize: "0.75rem",
                borderRadius: "10px",
                padding: "4px 10px",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f2f2f2";
                e.target.style.borderColor = "#aaa";
                e.target.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "pink";
                e.target.style.color = "#333";
              }}
            >
              Seguir comprando
            </Button>
          </Link>

          {productosCarrito.length > 0 && (
            <Button
              onClick={funcionDisparadora2}
              size="sm"
              style={{
                backgroundColor: "white",
                border: "1px solid pink",
                color: "#333",
                fontSize: "0.75rem",
                borderRadius: "10px",
                padding: "4px 10px",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f2f2f2";
                e.target.style.borderColor = "#aaa";
                e.target.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "pink";
                e.target.style.color = "#333";
              }}
            >
              Vaciar carrito
            </Button>
          )}
        </Col>

        <Col className="text-end">
          <h4 style={{ fontSize: "1.2rem", color: "#7a7a7a" }}>
            Carrito de compras
          </h4>
        </Col>
      </Row>

      {productosCarrito.length > 0 ? (
        <>
          {productosCarrito.map((producto) => (
            <CarritoCardBootstrap
              key={producto.id}
              producto={producto}
              funcionDisparadora={funcionDisparadora}
            />
          ))}

          <Row className="align-items-center mt-4">
            <Col>
              <h5>Total a pagar: {total.toFixed(2)} $</h5>
            </Col>

            <Col className="d-flex justify-content-end">
              <Link to="/checkout">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid pink",
                    color: "#333",
                    fontSize: "0.75rem",
                    borderRadius: "10px",
                    padding: "4px 10px",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f2f2f2";
                    e.target.style.borderColor = "#aaa";
                    e.target.style.color = "#000";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.borderColor = "pink";
                    e.target.style.color = "#333";
                  }}
                >
                  Finalizar compra
                </Button>
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <div className="text-center my-5">
          <img
            src={sadDogImage}
            alt="Perrito triste"
            style={{ width: "120px", marginBottom: "20px", opacity: 0.6 }}
          />
          <p style={{ color: "#888", fontSize: "1rem" }}>El carrito está vacío</p>
        </div>
      )}
    </Container>
  );
}

export default CarritoBootstrap;



