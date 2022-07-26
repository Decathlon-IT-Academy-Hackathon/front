import Recomendados from "./Recomendados.js";
import SideBar from "../sideBar/SideBar.js";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Gallery from "./gallery.js";
function Chat() {
  return (
    <Container fluid>
      <Row className="bg-light p-4">
        <Col md={7}>
          <Recomendados />
        </Col>
        <Col md={5} className="p-0 d-flex justify-content-end">
          <SideBar />
        </Col>
      </Row>
      <Row className="bg-light mb-3">
        <h4>Fotos con el producto</h4>
        <Gallery />
      </Row>
    </Container>
  );
}
export default Chat;
