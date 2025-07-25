{/*import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { useAuthContext } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

function FormularioEdicion({ }) {
  const {admin} = useAuthContext();
  const {obtenerProducto, productoEncontrado, editarProducto} = useProductosContext();
  const { id } = useParams();
  const [producto, setProducto] = useState(productoEncontrado);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  useEffect(() => {
    obtenerProducto(id).then(() => {
      //setProducto(productoEncontrado)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.imagen.trim()){
      return("La url de la imagen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if(validarForm == true){
      editarProducto(producto).then((prod) => {
        toast.success("Producto editado correctamente!");
      }).catch((error) => {
        toast.error("Hubo un problema al actualizar el producto. " + error.message);
      })
    }else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>URL de la Imagen</label>
        <input
          type="text" name="imagen" value={producto.imagen} onChange={handleChange} required/>
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
      <ToastContainer />
    </form>
  );
}

export default FormularioEdicion
import { Container, Row, Col, Image } from "react-bootstrap";
import FormularioEdicion from "./FormularioEdicion";

function FormularioEdicionPage() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#fffafc" }}>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="d-none d-md-block text-center">
          <Image
            src="https://cdn.pixabay.com/photo/2016/02/19/11/19/dog-1207816_1280.jpg"
            alt="Mascota ilustrativa"
            fluid
            style={{
              maxHeight: '500px',
              borderRadius: '1rem',
              objectFit: 'cover',
              boxShadow: '0 0 15px rgba(0,0,0,0.1)'
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="p-4 rounded shadow-sm" style={{
            backgroundColor: "#fff",
            border: "1px solid #f3d7e0",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
            borderRadius: "1rem"
          }}>
            <FormularioEdicion />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioEdicionPage;
*/}
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { useAuthContext } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormularioEdicion() {
  const { admin } = useAuthContext();
  const { obtenerProducto, editarProducto } = useProductosContext();
  const { id } = useParams();

  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    imagen: ""
  });

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    obtenerProducto(id)
      .then((productoObtenido) => {
        setProducto(productoObtenido);
        setCargando(false);
      })
      .catch((error) => {
        if (error === "Producto no encontrado") {
          setError("Producto no encontrado");
        } else {
          setError("Hubo un error al obtener el producto.");
        }
        setCargando(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = () => {
    if (!producto.name.trim()) return "El nombre es obligatorio.";
    if (!producto.price || producto.price <= 0) return "El precio debe ser mayor a 0.";
    if (!producto.description.trim() || producto.description.length < 10)
      return "La descripción debe tener al menos 10 caracteres.";
    if (!producto.imagen.trim()) return "La URL de la imagen no debe estar vacía.";
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validacion = validarFormulario();
    if (validacion === true) {
      editarProducto(producto)
        .then(() => {
          toast.success("Producto editado correctamente!");
        })
        .catch((error) => {
          toast.error("Hubo un problema al actualizar el producto. " + error.message);
        });
    } else {
      toast.error(validacion);
    }
  };

  if (cargando) return <p className="text-center my-5">Cargando producto...</p>;
  if (error) return <p className="text-center text-danger my-5">{error}</p>;

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <h2 className="mb-4 text-center" style={{ color: "#b06f85" }}>Editar Producto</h2>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={producto.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">URL de la Imagen:</label>
        <input
          type="text"
          name="imagen"
          className="form-control"
          value={producto.imagen}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Precio:</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={producto.price}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          className="form-control"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100">Actualizar Producto</button>
      <ToastContainer />
    </form>
  );
}

export default FormularioEdicion;
