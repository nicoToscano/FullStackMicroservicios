import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export function EditarProducto({ idProducto }) {
  const router = useNavigate();
  const [nombre, setNombre] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [stock, setStock] = React.useState("");

  var { idProducto } = useParams();

  const getProducto = async () => {
    try {
      const response = await fetch(
        `https://localhost:7081/api/products/${idProducto}`
      );
      const data = await response.json();

      if (response.status === 200) {
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setCategoria(data.categoria);
        setImagen(data.imagen);
        setPrecio(data.precio);
        setStock(data.stock);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      nombre,
      descripcion,
      categoria,
      imagen,
      precio,
      stock,
    });

    try {
      const res = await fetch(
        `https://localhost:7081/api/products/${idProducto}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            descripcion,
            categoria,
            imagen,
            precio,
            stock,
          }),
        }
      );

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
    <>
      <h1>Edición de producto</h1>
      <form className="formularioEdicion" onSubmit={handleSubmit}>
        <div className="inputLabel">
          <label>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="inputLabel">
          <label>Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="inputLabel">
          <label>Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <div className="inputLabel">
          <label>Imagen:</label>
          <img src={imagen} alt=""/>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className="inputLabel">
          <label>Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="inputLabel">
          <label>Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button type="submit">Actualizar Producto</button>
      </form>
    </>
  );
}
