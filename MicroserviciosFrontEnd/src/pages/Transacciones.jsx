import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function Transacciones() {
  const [transacciones, setTransacciones] = useState([]);

  const getTransacciones = async () => {
    try {
      const response = await fetch("https://localhost:7295/api/transaction");
      const data = await response.json();

      if (response.status === 200) {
        setTransacciones(data);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
  useEffect(() => {
    getTransacciones();
  }, []);

  return (
    <>
      <h1>Transacciones</h1>
      <div className="containerListaTransacciones">
        {transacciones?.map((transaccion) => {
          return (
            <div className="listaTransacciones" key={transaccion.id}>
              <ul>
                <li className="date">
                  <strong>Fecha de transacción:</strong> {transaccion.dateOnly}
                </li>
                <li className="date">
                  <strong>Cantidad:</strong> {transaccion.cantidad}
                </li>
                <li className="date">
                  <strong>Precio total:</strong> {transaccion.precioTotal}
                </li>
                <li className="date">
                  <strong>Precio unitario:</strong> {transaccion.precioUnitario}
                </li>
              </ul>
              <ul>
                <li className="date">
                  <strong>Id del producto:</strong> {transaccion.productoId}
                </li>
                <li className="date">
                  <strong>Tipo de transacción:</strong>{" "}
                  {transaccion.tipoDeTransaccion}
                </li>
                <li className="date">
                  <strong>Detalle:</strong> {transaccion.detalle}
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <Link to="/creaciontransacciones">
        <button className="btn">Crear transacción</button>
      </Link>
    </>
  );
}
