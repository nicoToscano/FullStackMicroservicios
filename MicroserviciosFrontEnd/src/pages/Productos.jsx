import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Productos() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch("https://localhost:7081/api/products");
      const data = await response.json();

      if (response.status === 200) {
        setProductos(data);

        console.log("Productos:", data);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <h1>Productos</h1>

      {productos?.map((producto) => {
        return (
          <div className="listaProductos" key={producto?.id}>
            <p>
              {producto?.id} - {producto?.nombre} - {producto?.descripcion} -{" "}
              {producto?.categoria} - {producto?.precio} - {producto?.stock}
            </p>

            <Link to={`/edicionproductos/${producto?.id}`}>
              <button className="btn btn-primary">Editar</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
