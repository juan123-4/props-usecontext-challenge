import React from "react";
import { useCalculator } from "../components/CalculatorProvider";
import { Link } from "react-router-dom";

const Result = () => {
  const { numbers, calculateSum, resetCalculator } = useCalculator();

  return (
    <div>
      <h1 className="todo">Resultado</h1>
      <p className="todo">Números Seleccionados: {numbers.join(", ") || "Ninguno"}</p>
      <p className="todo">Suma Total: {calculateSum()}</p>
      <button onClick={resetCalculator} className="reseat">Resetear</button>
      <Link to="/">Volver a la Calculadora</Link>
    </div>
  );
};

export default Result;
