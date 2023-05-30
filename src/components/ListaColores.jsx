import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores,setColores}) => {
  //Write a new useEffect that "tracks" items and console.logs items
  useEffect(() => {
    const coloresJSON = localStorage.getItem("colores");
    console.log(colores);
    if (coloresJSON) {
      setColores(JSON.parse(coloresJSON));
    }
  }, []);

  return (
    <>
    <ListGroup>
      {" "}
      {Array.isArray(colores) && colores.map((color, index) => (
        <ItemColor key={index} color={color}></ItemColor>
      ))}
    </ListGroup>
    </>
  );
};

export default ListaColores;
