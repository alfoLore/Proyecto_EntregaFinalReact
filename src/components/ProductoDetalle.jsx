{/*import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";
import Producto from "./BotonCompra";
import { Button } from "react-bootstrap";

function ProductoDetalle({}) {

  const navegar = useNavigate();

  const {admin} = useAuthContext();
  const {agregarAlCarrito} = useContext(CarritoContext);
  const {productoEncontrado, obtenerProducto, eliminarProducto} = useProductosContext();

  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);


  function funcionCarrito() {
    if (cantidad < 1) return;

    console.log("Agregar al carrito")
    agregarAlCarrito({ ...productoEncontrado, cantidad });
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
  }

  function dispararEliminar(){
    eliminarProducto(id).then(() => {
      navegar("/productos")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <div className="detalle-container">
      <img className="detalle-imagen" src={productoEncontrado.imagen} alt={productoEncontrado.name} />
      <div className="detalle-info">
        <h2>{productoEncontrado.name}</h2>
        <p>{productoEncontrado.description}</p>
        <p>{productoEncontrado.price} $</p>
        <div className="detalle-contador">
          <button onClick={restarContador}>-</button>
          <span>{cantidad}</span>
          <button onClick={sumarContador}>+</button>
        </div>
        {admin ? <Link to={"/admin/editarProducto/" + id}> <Button >Editar Producto</Button></Link> : <Button onClick={funcionCarrito}>Agregar al carrito</Button> }
        {admin ? <button onClick={dispararEliminar} >Eliminar Producto</button> : <></>}
      </div>
    </div>
  );
}

export default ProductoDetalle;*/}

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";

function ProductoDetalle() {
  const navegar = useNavigate();
  const { admin } = useAuthContext();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { productoEncontrado, obtenerProducto, eliminarProducto } = useProductosContext();

  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id)
      .then(() => setCargando(false))
      .catch((error) => {
        setError(error);
        setCargando(false);
      });
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    agregarAlCarrito({ ...productoEncontrado, cantidad });
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
  }

  function dispararEliminar() {
    eliminarProducto(id)
      .then(() => navegar("/productos"))
      .catch((error) => {
        dispararSweetBasico("Hubo un problema", error, "error", "Cerrar");
      });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="secondary" />
        <p className="mt-2">Cargando producto...</p>
      </div>
    );

  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow-sm rounded-4 border-0 producto-detalle-card">
        <Row className="align-items-center">
          <Col md={6}>
            <Card.Img
              src={productoEncontrado.imagen}
              alt={productoEncontrado.name}
              className="rounded-4"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="text-muted">{productoEncontrado.name}</h3>
            <p>{productoEncontrado.description}</p>
            <h5 className="text-dark fw-bold">{productoEncontrado.price} $</h5>

            <div className="d-flex align-items-center my-3">
              <Button variant="outline-secondary" size="sm" onClick={restarContador}>−</Button>
              <span className="mx-3 fs-5">{cantidad}</span>
              <Button variant="outline-secondary" size="sm" onClick={sumarContador}>+</Button>
            </div>

            {admin ? (
              <>
                <Link to={`/admin/editarProducto/${id}`}>
                  <Button variant="outline-primary" className="me-2">Editar</Button>
                </Link>
                <Button variant="outline-danger" onClick={dispararEliminar}>Eliminar</Button>
              </>
            ) : (
              <Button variant="outline-pink" className="btn-agregar" onClick={funcionCarrito}>
                Agregar al carrito
              </Button>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductoDetalle;

