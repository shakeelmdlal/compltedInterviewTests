import React, { useState } from "react";
import "./index.css";

const addition = (val1) => (val2) => +val1 + +val2;
const multiplication = (val1) => (val2) => +val1 * +val2;
const subtract = (val1) => (val2) => +val1 - +val2;
const divide = (val1) => (val2) => +val1 / +val2;

const initialInputvalues = {
  input1: "",
  input2: "",
};

export default function Calculator() {
  const [inputs, setInputs] = useState(initialInputvalues);
  const [result, setResult] = useState(null);
  const [operationCount, setCount] = useState(0);
  const [operator, setOperator] = useState("+");

  const calculate = (operation) => {
    const { input1, input2 } = inputs;
    if (!input1 || !input2) return;

    switch (operation) {
      case "subtract":
        setResult(subtract(input1)(input2));
        setOperator("-");
        break;
      case "multiplication":
        setResult(multiplication(input1)(input2));
        setOperator("*");
        break;
      case "divide":
        setResult(divide(input1)(input2));
        setOperator("/");
        break;
      default:
        setResult(addition(input1)(input2));
        setOperator("+");
    }

    setCount(operationCount + 1);
  };

  const handleChange = (e) => {
    e.persist();
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const reset = () => {
    setResult(null);
    setInputs({ ...initialInputvalues });
    setOperator("+");
  };

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">
        Total operations performed:{operationCount}
      </div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              value={inputs.input1}
              onChange={handleChange}
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
            >
              {operator}
            </label>
            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              name="input2"
              value={inputs.input2}
              onChange={handleChange}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick={() => calculate("addition")}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick={() => calculate("subtract")}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick={() => calculate("multiplication")}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick={() => calculate("divide")}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick={reset}
            >
              Reset
            </button>

            {result !== null && (
              <div className="layout-row justify-content-center align-items-center result-container">
                <div
                  data-testid="result"
                  className="result-value ma-0 slide-up-fade-in"
                >
                  Result: {result}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}





