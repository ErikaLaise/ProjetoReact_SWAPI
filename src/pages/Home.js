import { Container, PlanetList, Planet } from "./home.css";
import { useState, useEffect } from "react";
import "./home.css";
import Card from "../components/card/Card";

function Home() {
  const [planets, setPlanets] = useState([]);

  const imagesPlanets = [
    "/planetas/TATOOINE1.png",
    "/planetas/ALDERAAN2.png",
    "/planetas/YAVIN_IV3.png",
    "/planetas/HOTH4.png",
    "/planetas/DAGOBAH5.png",
    "/planetas/BESPIN6.png",
    "/planetas/ENDOR7.png",
    "/planetas/NABOO8.png",
    "/planetas/CORUSCANT9.png",
    "/planetas/KAMINO10.png",
  ];

  async function fetchData() {
    const response = await fetch(
      "https://swapi.dev/api/planets/",

      { method: "GET" }
    );
    const data = await response.json();
    setPlanets(data.results);
    console.log(data.results);
  }
  fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>    
      <h1>Planetas Star Wars</h1>

      <section className="secaoCards">
        {planets.map((planet, index) => (
          <Card
            key={index}
            foto={imagesPlanets[index]}
            nomePlaneta={planet.name}
            clima={planet.climate}
            terreno={planet.terrain}
            gravidade={planet.gravity}
            periodoDeRotacao={planet.rotation_period}
            populacao={planet.population}
            diametro={planet.diameter}
            superficieAquosa={planet.surface_water} />
        ))}
      </section>
    
    
    <footer>
        <p>Todos os dados foram obtidos de <a className="link" href="https://swapi.dev/api/planets">SWAPI</a></p>

        <p>Desenvolvido por <a className= "link" href="https://github.com/ErikaLaise/"> ® Érika Laíse - 2023</a></p>
      </footer></>
  );
}

export default Home;

