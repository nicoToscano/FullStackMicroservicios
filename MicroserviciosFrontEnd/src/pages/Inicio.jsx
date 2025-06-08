import { NavLink } from "react-router-dom";

export function Inicio() {
  return (
    <main className="home">
      <section className="card">
        <div className="logos">
          <img src="./netcore.png" alt=".NET Logo" className="logo" />
          <img src="/react.svg" alt="React Logo" className="logo" />
          <img src="/vite.svg" alt="Vite Logo" className="logo" />
        </div>
        <h1>Microservicios con .NET, React & Vite</h1>
        <div className="actions">
          <NavLink to="/productos" className="btn">Productos</NavLink>
          <NavLink to="/transacciones" className="btn secondary">Transacciones</NavLink>
        </div>
      </section>
    </main>
  );
}
