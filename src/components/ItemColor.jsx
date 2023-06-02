import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemColor = ({ color, borrarColor }) => {
  const divStyle = {
    backgroundColor: color,
    width: "200px",
    height: "200px",
  };

  const handleBorrar = () => {
    borrarColor(color);
  };

  return (
    <>
      <Card>
        <Card.Header>{color}</Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <div style={divStyle} className="m-4"></div>
          <div>
            <Button variant="danger" onClick={handleBorrar}>Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemColor;
