import Cards from "./Card";
import SideBar from "../sideBar/SideBar.js";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Chat() {
  return (
    <Container fluid>
      <Row>
        <Col md={7}>
          <Cards />
        </Col>
        <Col md={5} className="p-0">
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}
export default Chat;
