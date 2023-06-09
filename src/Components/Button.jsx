import "../styling/button.css";

function Button({ title, action }) {
  return <button onClick={action}>{title}</button>;
}

export default Button;
