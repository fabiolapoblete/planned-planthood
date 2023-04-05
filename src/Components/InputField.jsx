import "../styling/inputField.css";

function InputField(props) {
  return (
    <section className="inputItems">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event) => props.action(event.target.value)}
      />
    </section>
  );
}

export default InputField;
