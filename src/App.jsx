import './App.css';
import React from "react";
import RoutesApp from "../routes/RoutesApp";
import { CalculatorProvider } from "../components/CalculatorProvider";


function App() {
  return (
    <>
      <CalculatorProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </CalculatorProvider>
    </>
  );
}

export default App;
