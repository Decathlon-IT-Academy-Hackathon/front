import userPhoto from "../../assets/user1.jpg";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

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
      </div>
    </div>
  );
}
export default Recomendados;
