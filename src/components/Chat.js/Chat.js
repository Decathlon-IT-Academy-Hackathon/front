import Recomendados from "./Card.js";
import SideBar from "../sideBar/SideBar.js";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Chat() {
  return (
    <Container fluid>
      <Row className="bg-light">
        <Col md={7}>
          <Recomendados />
        </Col>
        <Col md={5} className="p-0">
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}
export default Chat;
