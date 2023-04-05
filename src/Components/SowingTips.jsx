import Button from "./Button";
import "../styling/sowingTips.css";
import { Link } from "react-router-dom";

function SowingTips() {
  return (
    <section className="sowingTips">
      <img src="../img1.png" alt="" />
      <article className="sowingTips__textbox">
        <h2>Säsong att så</h2>
        <p>
          Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
          consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
          amet eu elit.
        </p>
        <Link to="/tips" style={{ alignSelf: "flex-end" }}>
          <Button title="Så-tips" />
        </Link>
      </article>
    </section>
  );
}

export default SowingTips;
