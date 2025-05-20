import { NavLink } from "react-router-dom";

export function Inicio() {
  return (
    <>
      <div className="logos">
        <img className="logo net" src="./netcore.png" alt="Logo .NET" />
        <img className="logo react" src="/react.svg" alt="Logo React" />
        <img className="logo" src="/vite.svg" alt="Logo Vite" />
      </div>
      <h1>FullStack Microservicios .NET y React + Vite</h1>

      <div className="container">
        <div className="productos">
          <NavLink to="/productos">
            <h2 className="btnProductos">Lista de productos</h2>
          </NavLink>
        </div>
        <div className="transacciones">
          <NavLink to="/transacciones">
            <h2 className="btnTransacciones">Lista de transacciones</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
}
