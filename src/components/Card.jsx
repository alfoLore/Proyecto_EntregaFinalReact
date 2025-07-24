import { useState } from "react";
import "../styles/Productos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
{/*}
function CardProducto({producto}){
    console.log(producto)

    return(
        <Card>
            <Card.Img variant="top" src={producto.imagen} style={{ maxHeight: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
                <Link to={"/productos/" + producto.id}><Button variant="primary">Ver detalles del producto</Button></Link>
            </Card.Body>
          </Card>
        
    )
}

export default CardProducto*/}


function CardProducto({ producto }) {
  return (
    <Card
      className="mb-4 shadow-sm border-0"
      style={{
        borderRadius: "1.5rem",
        backgroundColor: "#ffffff",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.name}
        style={{
          height: "220px",
          objectFit: "cover",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem"
        }}
      />
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: "1.2rem", color: "#444", fontWeight: "600" }}>
          {producto.name}
        </Card.Title>
        <Link to={`/productos/${producto.id}`}>
          <Button
            variant="outline-secondary"
            style={{
              fontSize: "0.9rem",
              borderRadius: "20px",
              padding: "6px 16px",
              color: "#444",
              borderColor: "#ffc0cb",
              transition: "all 0.3s ease-in-out"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f0f0f0";
              e.target.style.borderColor = "#999";
              e.target.style.color = "#222";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "#ffc0cb";
              e.target.style.color = "#444";
            }}
          >
            Ver detalles
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
