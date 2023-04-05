import { useContext, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { PlantContext } from "../App";
import "../styling/addPlants.css";

function AddPlants() {
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState();

  const { plants, setPlants } = useContext(PlantContext);

  function addNewPlant(event) {
    event.preventDefault();
    console.log("knappen är tryckt");

    let newPlant = {
      type: type,
      date: date,
      url: url,
      name: name,
    };

    console.log(newPlant);

    setPlants([newPlant, ...plants]);
    console.log(plants);
  }

  return (
    <section className="addPlants">
      <h2>Lägg till planerade planteringar</h2>
      <article className="inputSection">
        <form>
          <h3>Ny sådd:</h3>
          <section className="inputSection__rows">
            <InputField
              label="Frönamn"
              type="text"
              placeholder="Tomat"
              action={setType}
            />
            <InputField
              label="Datum för sådd"
              type="date"
              placeholder="2023-04-01"
              action={setDate}
            />
          </section>
          <section className="inputSection__rows">
            <InputField
              label="URL exempelbild"
              type="text"
              placeholder="https://images.unsplash.co.."
              action={setUrl}
            />
            <InputField
              label="Planterare"
              type="text"
              placeholder="Emma"
              action={setName}
            />
          </section>
          <Button title="Lägg till" action={addNewPlant} />
        </form>

        <img src="../img2.png" alt="" />
      </article>
    </section>
  );
}

export default AddPlants;
