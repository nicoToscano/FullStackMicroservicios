import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Productos } from "../pages/Productos";
import { Transacciones } from "../pages/Transacciones";
import { CrearTransaccion } from "../pages/CrearTransaccion";
import { CrearProducto } from "../pages/CrearProducto";
import { EditarProducto } from "../pages/EditarProducto";
import { EditarTransaccion } from "../pages/EditarTransaccion";


export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/creacionproductos" element={< CrearProducto/>} />
        <Route
          path="/creaciontransacciones"
          element={<CrearTransaccion />}
        />
        <Route path="/edicionproductos/:idProducto" element={<EditarProducto />} />
        <Route
          path="/ediciontransacciones"
          element={<EditarTransaccion />}
        />
      </Routes>
    </BrowserRouter>
  );
}
