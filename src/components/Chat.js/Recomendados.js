import userPhoto from "../../assets/user1.jpg";
import Badge from "react-bootstrap/Badge";

function Recomendados() {
  return (
    <div className="detail__container d-flex flex-column">
      <div className="user__container p-3">
        <div style={{ width: "100px" }} className="rounded">
          <img src={userPhoto} className="img-fluid rounded" />
        </div>
        <div>
          <h6 className="fw-bold">Carles Bosch</h6>
          <small className="text-mutted s">Recomendaciones: 230</small>
        </div>
        <Badge pill bg="primary">
          Senderismo
        </Badge>
        <Badge pill bg="primary">
          Snorkel
        </Badge>
      </div>
      <div className="description">
        <p>
          Con años de experiencia en senderos en parques nacionales, he sido
          capaz de adaptarme a los diferentes ecosistemas. Conozco mucho los
          productos de decatlhon y me han acompañado siempre en cada salida a la
          montaña
        </p>
      </div>
    </div>
  );
}
export default Recomendados;
