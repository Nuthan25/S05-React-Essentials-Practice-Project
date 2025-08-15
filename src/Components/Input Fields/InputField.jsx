export default function InputField({ investmentValues, handleInputValueChange, label }) {

  const inputLabel = label.replace(/\s/g, "");

  return (
    <p>
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        id={label}
        onChange={(e) => {
          const value = Math.max(0, Number(e.target.value)) // inaczej bylby to string!!! pomimo type="number" i tak zwracany jest string
          handleInputValueChange(inputLabel, value)
        }}
        value={investmentValues[inputLabel]}
        required
      />
    </p>
  );
}
