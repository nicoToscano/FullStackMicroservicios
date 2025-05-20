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

      <div className="containerListaProductos">
        {productos?.map((producto) => {
          return (
            <div className="listaProductos" key={producto?.id}>
              <ul>
                <li className="nombre">{producto?.nombre}</li>
                <li className="descripcion">{producto?.descripcion}</li>
                <li className="imagen"><img src={producto?.imagen} alt="" /></li>
                <li className="categoria">{producto?.categoria}</li>
                <li className="precio">{producto?.precio}</li>
                <li className="stock">{producto?.stock}</li>
              </ul>

              <Link to={`/edicionproductos/${producto?.id}`}>
                <button className="btn btn-primary">Editar</button>
              </Link>
            </div>
          );
        })}
      </div>

      <Link to="/creacionproductos">
        <button className="btn btn-primary">Crear Producto</button>
      </Link>
    </>
  );
}
