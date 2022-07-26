import Card from "./Card";
import SideBar from "../sideBar/SideBar.js";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Chat() {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Card />
        </Col>
        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}
export default Chat;
