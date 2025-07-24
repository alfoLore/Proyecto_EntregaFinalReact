import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { Form, Button, Card } from 'react-bootstrap';
{/*}
function LoginBoost() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario (e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }if(error.code == "auth/weak-password"){
        dispararSweetBasico("Contraseña debil", "Password should be at least 6 characters", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  const handleSubmit2 = (e) => {
    logout()
  }

  function iniciarSesionEmailPass (e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if(error.code == "auth/invalid-credential"){
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  function handleShow (e) {
    e.preventDefault();
    setShow(!show)
  }

  if(user || admin){
    return(
        <form onSubmit={handleSubmit2}>
        <button type="submit">Cerrar sesión</button>
        </form>
    )
  }if(!user && show){
    return(
      <div className='d-flex flex-column  justify-content-center  align-items-center '>
        <form onSubmit={iniciarSesionEmailPass} className="p-4 border rounded shadow w-50">
          <h2>Iniciar sesión con Email y pass</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={usuario}
              onChange={(e) => setUsuario(e.target.value)} type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-50">Ingresar</button>
          <button style={{marginTop:"2px"}} className="btn btn-secondary w-50"  onClick={handleShow}>Registrate</button>
        </form>
      </div>
    )
  }if(!user && !show){
    return(
    <div>
      <form onSubmit={registrarUsuario}>
        <h2>Registrarse</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrase</button>
      </form>
      <button style={{marginTop:"2px"}} onClick={handleShow}>Iniciar Sesión</button>
    </div>
    )
  }
  
}
export default LoginBoost;*/}


function LoginBoost() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const { login, user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password)
      .then(() => {
        login(usuario);
        dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar");
        }
        if (error.code === "auth/weak-password") {
          dispararSweetBasico("Contraseña débil", "Debe tener al menos 6 caracteres", "error", "Cerrar");
        }
      });
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    logout();
  };

  function iniciarSesionEmailPass(e) {
    e.preventDefault();
    loginEmailPass(usuario, password)
      .then(() => {
        login(usuario);
        dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar");
        }
      });
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  if (user || admin) {
    return (
      <Form onSubmit={handleSubmit2} className="text-center mt-5">
        <Button variant="outline-danger" type="submit">
          Cerrar sesión
        </Button>
      </Form>
    );
  }

  const cardStyle = {
    borderRadius: "1rem",
    border: "1px solid #f1cbff",
    backgroundColor: "#fff",
  };

  const inputStyle = {
    borderRadius: "10px",
    borderColor: "#f1cbff",
  };

  if (!user && show) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px", ...cardStyle }}>
          <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#4a4a4a" }}>Iniciar sesión</h4>
          <Form onSubmit={iniciarSesionEmailPass}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={inputStyle}
                type="email"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                style={inputStyle}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="light" type="submit" className="w-100 mb-2" style={{ borderColor: "#f1cbff", borderRadius: "10px" }}>
              Ingresar
            </Button>
            <Button variant="outline-secondary" className="w-100" onClick={handleShow} style={{ borderRadius: "10px" }}>
              Registrate
            </Button>
          </Form>
        </Card>
      </div>
    );
  }

  if (!user && !show) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px", ...cardStyle }}>
          <h4 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#4a4a4a" }}>Registrarse</h4>
          <Form onSubmit={registrarUsuario}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={inputStyle}
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                style={inputStyle}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="light" type="submit" className="w-100 mb-2" style={{ borderColor: "#f1cbff", borderRadius: "10px" }}>
              Registrarse
            </Button>
            <Button variant="outline-secondary" className="w-100" onClick={handleShow} style={{ borderRadius: "10px" }}>
              Ya tengo cuenta
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LoginBoost;

