import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import {useState, useEffect} from "react";

const coloresLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];
const Formulario = () => {
const [color,setColor] = useState("");
const [colores, setColores] = useState(coloresLocalStorage);

useEffect(() => {
  localStorage.setItem("listaColores",JSON.stringify(colores));
},[colores])

const handleSubmit = (e) => {
  e.preventDefault();
  setColores([...colores,color]);
  setColor("");
};
const handleChange = (e) => {
  setColor(e.target.value);
  console.log(colores)
};

const borrarTarea = (nombreTarea)=>{
  let copiaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea);
  setTareas(copiaTareas);
};

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="color">
        <Form.Control type="text" placeholder="ingrese un color" value={color} onChange={handleChange}/>
        <Button variant="primary" type="submit">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaColores colores={colores} setColores={setColores} borrarTarea={borrarTarea}></ListaColores>
    </>
  );
};

export default Formulario;
