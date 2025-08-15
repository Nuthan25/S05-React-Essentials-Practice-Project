import InputField from "./InputField";

export default function UserInput({ investmentValues, handleInputValueChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          investmentValues={investmentValues}
          handleInputValueChange={handleInputValueChange}
          label="initial Investment"
        />
        <InputField
          investmentValues={investmentValues}
          handleInputValueChange={handleInputValueChange}
          label="annual Investment"
        />
      </div>
      <div className="input-group">
        <InputField
          investmentValues={investmentValues}
          handleInputValueChange={handleInputValueChange}
          label="expected Return"
        />
        <InputField
          investmentValues={investmentValues}
          handleInputValueChange={handleInputValueChange}
          label="duration"
        />
      </div>
    </section>
  );
}
