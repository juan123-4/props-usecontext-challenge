import React from "react";
import { useCalculator } from "../components/CalculatorProvider";
import { Link } from "react-router-dom";

const Calculator = () => {
  const { ActualNumber, addNumber } = useCalculator();

  return (
    <div>
      <h1 className="todo">Calculadora</h1>
      <div className="calculator-display">
        Número Actual: {ActualNumber !== null ? ActualNumber : "Ninguno"}
      </div>
      <div className="calculator-buttons">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => addNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/result">Ver Resultado</Link>
    </div>
  );
};

export default Calculator;
