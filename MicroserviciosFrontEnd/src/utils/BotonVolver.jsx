import { useNavigate } from "react-router-dom";

export function BotonVolver() {
  const navigate = useNavigate();

  return (
    <button className="btnVolver" onClick={() => navigate(-1)}>
      ⬅ Volver
    </button>
  );
}
