import { useContext } from "react";
import "../styling/plantCard.css";
import { PlantContext } from "../App";
import Button from "./Button";

function PlantCard({ plant, id }) {
  const { type, date, url, name } = plant;

  const { plants, setPlants } = useContext(PlantContext);

  function removePlant(id) {
    setPlants(plants.filter((plant, i) => i !== id));
  }

  return (
    <article className="plantCard">
      <figure style={{ backgroundImage: `url(${url})` }}></figure>
      <section>
        <h3>{type}</h3>
        <h4>{date}</h4>
      </section>
      <section>
        <p>{name}</p>
        <Button title="Ta bort" action={() => removePlant(id)} />
      </section>
    </article>
  );
}

export default PlantCard;
