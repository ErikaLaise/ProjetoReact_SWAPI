import "./Card.css";

function Card({
  foto,
  nomePlaneta,
  clima,
  terreno,
  gravidade,
  populacao,
  diametro,
  superficieAquosa,
}) {
  return (
    <div className="container">
      <div className="card">
        <div className="cardFront">
          
          <h1>Planeta: {nomePlaneta}</h1>
          <img className="imagem" src={foto} alt="foto do planeta" />
        </div>

        <div className="cardBack">
          <h1>Sobre este planeta:</h1>

          <p>
            <b>Clima:</b>
            {clima}
          </p>
          <p>
            <b>Terreno:</b>
            {terreno}
          </p>
          <p>
            <b>Gravidade:</b>
            {gravidade}
          </p>
          <p>
            <b>População:</b>
            {populacao}
          </p>
          <p>
            <b>Diâmetro:</b>
            {diametro}
          </p>
          <p>
            <b>Superfície Aquosa:</b>
            {superficieAquosa}
          </p>        
        </div>
      </div>
    </div>
  );
}
export default Card;
