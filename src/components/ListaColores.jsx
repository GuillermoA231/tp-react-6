import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, setColores }) => {
  useEffect(() => {
    const coloresJSON = localStorage.getItem("colores");
    console.log(colores);
    if (coloresJSON) {
      setColores(JSON.parse(coloresJSON));
    }
  }, []);

  const borrarColor = (color) => {
    const coloresActualizados = colores.filter((c) => c !== color);
    setColores(coloresActualizados);
    localStorage.setItem("colores", JSON.stringify(coloresActualizados));
  };

  return (
    <>
      <ListGroup>
        {colores.map((color, index) => (
          <ItemColor
            key={index}
            color={color}
            borrarColor={borrarColor} // Utiliza el nombre correcto de la función
          ></ItemColor>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaColores;
