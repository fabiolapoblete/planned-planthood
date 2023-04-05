import { useContext } from "react";
import { PlantContext } from "../App";
import PlantCard from "./PlantCard";
import "../styling/displayPLants.css";
import { Link } from "react-router-dom";

function DisplayPLants() {
  const { plants } = useContext(PlantContext);

  return (
    <section className="displayPlants">
      <h2>Våra planerade planteringar:</h2>
      <section className="plantsContainer">
        {plants.map((plant, i) => (
          <PlantCard key={i} plant={plant} />
        ))}
      </section>
      <Link to="/PlantCollection">
        <button className="plantBtn">Planterade Plantor</button>
      </Link>
    </section>
  );
}

export default DisplayPLants;
