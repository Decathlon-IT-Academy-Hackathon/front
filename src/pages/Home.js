import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

function Home() {
  // States
  const [users, setusers] = useState([
    {
      user_name: "Carles Artola",
      recomendaciones: 230,
      img: "https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto",
    },
    {
      user_name: "Daniel Lopez",
      recomendaciones: 530,
      img: "https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto",
    },
    {
      user_name: "Joan Bosch",
      recomendaciones: 230,
      img: "https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto",
    },
  ]);
  const [loading, setLoading] = useState(true);
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
              <Card.Img
                variant="top"
                src="https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto"
              />
              <Card.Body>
                <Card.Title>user</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
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
        <Card className="shadow">
          <Card.Img
            variant="top"
            src="https://contents.mediadecathlon.com/s927758/k$5c1763bb50956dff71179a7e19806815/4%20itemsliderdestacado%20500x500%20juegos%20de%20playa.jpg?format=auto"
          />
          <Card.Body>
            <Card.Title>user</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <Link to="/chat">Conócelo</Link>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Row>
  );
}
export default Home;
