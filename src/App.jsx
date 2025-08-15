console.clear();
import UserInput from "./Components/Input Fields/UserInput";
import Table from "./Components/Table/Table";

import { useState } from "react";

const DEFAULT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [investmentValues, setInvestmentValues] = useState(DEFAULT_VALUES);

  function handleInputValueChange(key, value) {
    setInvestmentValues((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });

    console.log("Input values: ", investmentValues);
  }

  return (
    <main>
      <UserInput
        investmentValues={investmentValues}
        handleInputValueChange={handleInputValueChange}
      />
      <Table investmentValues={investmentValues} />
    </main>
  );
}

export default App;
