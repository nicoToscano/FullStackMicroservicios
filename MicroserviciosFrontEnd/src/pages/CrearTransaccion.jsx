import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BotonVolver } from "../utils/BotonVolver";

export function CrearTransaccion() {
  const router = useNavigate();

  const [fecha, setFecha] = useState("");
  const [tipoDeTransaccion, setTipoDeTransaccion] = useState("");
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [precioTotal, setPrecioTotal] = useState("");
  const [detalle, setDetalle] = useState("");
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch("https://localhost:7081/api/products");
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
      } else {
        console.error("Error al obtener productos");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const setFechaHoy = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setFecha(`${yyyy}-${mm}-${dd}`);
  };

  const calcularPrecioTotal = () => {
    const cantidadNum = parseFloat(cantidad);
    const precioNum = parseFloat(precioUnitario);
    if (!isNaN(cantidadNum) && !isNaN(precioNum)) {
      setPrecioTotal((cantidadNum * precioNum).toFixed(2));
    } else {
      setPrecioTotal("");
    }
  };

  const productoValido = () => {
    const listaIds = productos.map((p) => p.id);
    return listaIds.includes(parseInt(productoId));
  };

  const mostrarAlerta = (tipo, mensaje) => {
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
    Toast.fire({ icon: tipo, title: mensaje });
  };

  useEffect(() => {
    getProductos();
    setFechaHoy();
  }, []);

  useEffect(() => {
    calcularPrecioTotal();
  }, [cantidad, precioUnitario]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productoValido()) {
      mostrarAlerta("error", "El producto con el ID ingresado no existe.");
      return;
    }

    try {
      const res = await fetch("https://localhost:7295/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fecha,
          tipoDeTransaccion,
          productoId,
          cantidad,
          precioUnitario,
          precioTotal,
          detalle,
        }),
      });

      if (res.ok) {
        mostrarAlerta("success", "Transacción creada exitosamente.");
        router("/transacciones");
      } else {
        mostrarAlerta("error", "Error al crear la transacción.");
      }
    } catch (error) {
      mostrarAlerta("error", "Error en la conexión con el servidor.");
    }
  };

  return (
    <>
      <div className="containerBotonVolver">
        <BotonVolver />
      </div>
      <h1>Crear Transacción</h1>
      <form className="formularioEdicion" onSubmit={handleSubmit}>
        <div className="inputLabel">
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>

        <div className="inputLabel">
          <label>Tipo de Transacción:</label>
          <input
            type="text"
            value={tipoDeTransaccion}
            onChange={(e) => setTipoDeTransaccion(e.target.value)}
            required
          />
        </div>

        <div className="inputLabel">
          <label>ID del Producto:</label>
          <input
            type="number"
            value={productoId}
            onChange={(e) => setProductoId(e.target.value)}
            required
          />
        </div>

        <div className="inputLabel">
          <label>Cantidad:</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <div className="inputLabel">
          <label>Precio Unitario:</label>
          <input
            type="number"
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(e.target.value)}
            required
          />
        </div>

        <div className="inputLabel">
          <label>Precio Total:</label>
          <input type="number" value={precioTotal} disabled />
        </div>

        <div className="inputLabel">
          <label>Detalle:</label>
          <textarea
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">
          Crear Transacción
        </button>
      </form>
    </>
  );
}
