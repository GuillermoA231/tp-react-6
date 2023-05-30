import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import {useState} from "react";

const Formulario = () => {
const [color,setColor] = useState("");
const [colores, setColores] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  setColores([...colores,color]);
  setColor("");
  localStorage.setItem("colores",JSON.stringify([...colores,color]));
}
const handleChange = (e) => {
  setColor(e.target.value);
  console.log(colores)
};
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="color">
        <Form.Control type="text" placeholder="ingrese un color" value={color} onChange={handleChange}/>
        <Button variant="primary" type="submit">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaColores colores={colores} setColores={setColores}></ListaColores>
    </>
  );
};

export default Formulario;
