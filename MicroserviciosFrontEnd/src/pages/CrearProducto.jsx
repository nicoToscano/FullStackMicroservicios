import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function CrearProducto() {
  const router = useNavigate();
  const [nombre, setNombre] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [stock, setStock] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://localhost:7081/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          descripcion,
          categoria,
          imagen,
          precio,
          stock,
        }),
      });

      if (res.status === 200) {
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
          title: "Actualización exitosa",
          text: "El producto ha sido actualizado exitosamente.",
        });

        router("/productos");
      }
    } catch (error) {
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
        text: "No se pudo actualizar el producto.",
      });
    }
  };

  return (
    <div className="crear-transaccion-container">
      <h1 className="crear-transaccion-titulo">Crear Producto</h1>
      <form onSubmit={handleSubmit} className="crear-transaccion-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Imagen (URL):</label>
          {imagen && (
            <img
              src={imagen}
              alt="Vista previa"
              style={{
                width: "100%",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
          )}
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Crear Producto
        </button>
      </form>
    </div>
  );
}
