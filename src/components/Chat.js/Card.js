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
        <small className="text-mutted">Recomendaciones: 230</small>
      </div>
    </div>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={userPhoto} />
    //   <Card.Body>
    //     <Card.Title>Carles Artola</Card.Title>
    //     <ListGroup className="list-group-flush">
    //       <ListGroup.Item>Puntuación</ListGroup.Item>
    //       <ListGroup.Item>Medallas</ListGroup.Item>
    //     </ListGroup>
    //     <Card.Text>Descripción personal.</Card.Text>
    //   </Card.Body>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}
export default Recomendados;
