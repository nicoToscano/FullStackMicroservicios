import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Productos } from "../pages/Productos";
import { Transacciones } from "../pages/Transacciones";
import { CreacionProductos } from "../pages/CreacionProductos";
import { CreacionTransacciones } from "../pages/CreacionTransacciones";
import { EdicionProductos } from "../pages/EdicionProductos";
import { EdicionTransacciones } from "../pages/EdicionTransacciones";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/creacionproductos" element={<CreacionProductos />} />
        <Route
          path="/creaciontransacciones"
          element={<CreacionTransacciones />}
        />
        <Route path="/edicionproductos/:idProducto" element={<EdicionProductos />} />
        <Route
          path="/ediciontransacciones"
          element={<EdicionTransacciones />}
        />
      </Routes>
    </BrowserRouter>
  );
}
