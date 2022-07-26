import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";

function Home() {
  // States
  const [users, setusers] = useState([
    {
      name: "Carles Artola",
      recomendaciones: 230,
      img: "https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto",
      experto: [{ playa: "snorkel" }, { montaña: "senderismo" }],
    },
    {
      name: "Daniela Lopez",
      recomendaciones: 530,
      img: "https://contents.mediadecathlon.com/s938933/k$9df2f3bb699d81bd65343a6a70f28b71/b%20hp%20verano%20mal%20432x432.jpg?format=auto",
      experto: [{ playa: "snorkel" }, { montaña: "senderismo" }],
    },
    {
      name: "Joan Bosch",
      recomendaciones: 230,
      img: "https://contents.mediadecathlon.com/s938936/k$fb5a970485b93f15f692fd0521c7dc47/b%20hp%20verano%20acc%20432x432.jpg?format=auto",
      experto: [{ playa: "snorkel" }, { montaña: "senderismo" }],
    },
  ]);
  const [loading, setLoading] = useState(false);
  // Effects
  useEffect(() => {
    getUsers();
  }, []);
  // Logic
  async function getUsers() {
    const r = await fetch("url");
    const d = await r.json();
    setusers(d.results);
  }
  return (
    <Row>
      <CardGroup className="gap-3">
        {!loading ? (
          users.map((u) => (
            <Card className="shadow">
              <Card.Img variant="top" src={u.img} />
              <Card.Body>
                <Card.Title>{u.name}</Card.Title>
                <Card.Text className="text-muted">
                  Recomendaciones: {u.recomendaciones}
                </Card.Text>
                <div className="d-flex gap-2">
                  <Badge pill bg="primary">
                    {u.experto.map((c) => c.montaña)}
                  </Badge>
                  <Badge pill bg="primary">
                    {u.experto.map((c) => c.playa)}
                  </Badge>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Link to="/chat">Conócelo</Link>
                </small>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </CardGroup>
    </Row>
  );
}
export default Home;
