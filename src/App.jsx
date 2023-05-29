import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Container className='my-5 main'>
      <h1 className='display-4 text-center'>Administrar Colores</h1>
      <hr />
      </Container>

      <footer>
        <footer className='text-center bg-dark text-light py-4'>
          <p>&copy; Todos los derechos reservados</p>
        </footer>
      </footer>
    </>
  )
}

export default App
