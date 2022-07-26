// React
import { Link } from "react-router-dom";
// Components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/decathlon-Logo.png";

function Header() {
  let expand = false;
  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link 
            className="col-md-4 mx-auto w-100" 
            to="/">
              <img
                className="d-none d-lg-block mx-auto"
                src={logo}
                style={{ width: "250px" }}
                alt="deca-logolg"
              />
              <img
                className="d-lg-none"
                src={logo}
                style={{ width: "200px" }}
                alt="deca-logosm"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link className="col-md-4 mx-auto w-100" to="/">
                  <img
                    className="d-none d-lg-block mx-auto"
                    src={logo}
                    style={{ width: "250px" }}
                    alt="deca-logolg"
                  />
                  <img
                    className="d-lg-none"
                    src={logo}
                    style={{ width: "200px" }}
                    alt="deca-logosm"
                  />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/chat">Recomendaciones</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
