import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BotonVolver } from "../utils/BotonVolver";

export function Productos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

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

  const eliminarProducto = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7081/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Eliminación exitosa",
          text: "El producto ha sido eliminado exitosamente.",
        });
        getProductos();
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el producto.",
        });
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <>
      <BotonVolver />
      <div className="containerProductos">
        <h1 className="titulo">Productos</h1>

        <div className="containerListaProductos">
          {productos?.map((producto) => {
            return (
              <div className="listaProductos" key={producto?.id}>
                <ul>
                  <li className="nombre">{producto?.nombre}</li>
                  <li className="descripcion">{producto?.descripcion}</li>
                  <li className="imagen">
                    <img src={producto?.imagen} alt="" />
                  </li>
                  <li className="categoria">
                    <strong>Tipo: </strong>
                    {producto?.categoria}
                  </li>
                  <li className="precio">${producto?.precio}</li>
                  <li className="stock">Disponle: {producto?.stock}</li>
                </ul>

                <div className="contenedorBtn">
                  <button
                    className="btnProductos"
                    onClick={() =>
                      navigate(`/edicionproductos/${producto?.id}`)
                    }
                  >
                    Editar
                  </button>

                  <button
                    className="btnProductos"
                    onClick={() => eliminarProducto(producto?.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/creacionproductos">
          <button className="btnProductos">Crear producto</button>
        </Link>
      </div>
    </>
  );
}
