import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SowingTips from "./Components/SowingTips";
import AddPlants from "./Components/AddPlants";
import DisplayPLants from "./Components/DisplayPlants";
import Tips from "./pages/Tips";
import PlantCollection from "./pages/PlantCollection";

export const PlantContext = createContext();

function App() {
  const plantData = [
    {
      type: "Tomat",
      date: "2023-04-01",
      url: "https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Emma",
    },
    {
      type: "Gurka",
      date: "2023-04-15",
      url: "https://images.unsplash.com/photo-1628444756705-9244dc6d4dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Rico Coolio",
    },
    {
      type: "Tomat",
      date: "2023-04-01",
      url: "https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Majvor",
    },
    {
      type: "Gurka",
      date: "2023-04-05",
      url: "https://images.unsplash.com/photo-1628444756705-9244dc6d4dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Rico Coolio",
    },
    {
      type: "Tomat",
      date: "2023-04-01",
      url: "https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Emma",
    },
    {
      type: "Gurka",
      date: "2023-04-05",
      url: "https://images.unsplash.com/photo-1628444756705-9244dc6d4dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Rico Coolio",
    },
  ];

  const [plants, setPlants] = useState(plantData);

  return (
    <Router>
      <div className="App">
        <PlantContext.Provider value={{ plants, setPlants }}>
          <nav className="App__nav">
            <svg
              className="App__nav__logo"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0298 49.8576C29.1786 49.6956 29.3248 49.5322 29.4684 49.3674L42.2853 41.257C52.1068 35.0421 54.9593 22.1548 48.6351 12.4756C47.6996 11.0438 45.7751 10.639 44.3336 11.5511L31.3493 19.7674C30.2134 18.0778 28.8456 16.4999 27.2482 15.0789L12.4277 1.89463C10.9859 0.612024 8.76476 0.720707 7.45885 2.14243C-1.80727 12.2303 -1.00723 27.8048 9.24046 36.9211L24.0609 50.1054C25.5027 51.388 27.7239 51.2793 29.0298 49.8576Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M12.6781 14.6142L11.9439 13.9352C4.85062 21.6054 5.46436 33.4502 13.307 40.3799L24.498 50.268C25.6851 51.317 27.5115 51.2292 28.5883 50.0648C28.6939 49.9506 28.7978 49.8355 28.9 49.7195L38.5479 43.6556C46.0788 38.9224 48.2729 29.0983 43.4176 21.7174L42.6209 22.2414L43.4176 21.7174C42.6356 20.5287 41.0348 20.1981 39.8378 20.9505L30.2299 26.9892C29.3876 25.7782 28.3855 24.6454 27.2252 23.6201L16.0342 13.732C14.8471 12.683 13.0207 12.7708 11.9439 13.9352L12.6781 14.6142Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            <h3>Planned planthood</h3>
          </nav>
          <Routes>
            <Route
              index
              element={
                <main>
                  {" "}
                  <SowingTips />
                  <hr />
                  <AddPlants />
                  <hr />
                  <DisplayPLants />
                </main>
              }
            />
            <Route path="/tips" element={<Tips />}></Route>
            <Route
              path="/plantCollection"
              element={<PlantCollection />}
            ></Route>
          </Routes>
        </PlantContext.Provider>
      </div>
    </Router>
  );
}

export default App;
