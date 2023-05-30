import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import { useState } from 'react';

function App() {
  return (
    <>
    <Container className="main my-3 text-center"r>
     <Formulario/>
    </Container>

    <footer className='text-center bg-dark text-light py-4'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  );
};

export default App;
