import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]); // Lista de los números seleccionados
  const [ActualNumber, setActualNumber] = useState(null); // Número actual 

  // Agregar número a la lista
  const addNumber = (number) => {
    setNumbers((prevNumbers) => [...prevNumbers, number]);
    setActualNumber(number);
  };

  // Calcular la suma de los números
  const calculateSum = () => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };

  // para resetear los valores
  const resetCalculator = () => {
    setNumbers([]);
    setActualNumber(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        numbers,
        ActualNumber,
        addNumber,
        calculateSum,
        resetCalculator,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
