import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SideBar() {
  return (
    <div className="bg-secondary sidebar-container p-4 d-flex flex-column gap-4">
      <h6 className="text-white">Productos similares a tus búsquedas</h6>
      <Card>
        <Card.Img
          variant="top"
          src="https://contents.mediadecathlon.com/p69082/k$5072f29c63d85acd44eadacb0741e417/sq/gorro-natacion-tejido-punto-azul-tallas-s-y-l.jpg?f=960x960"
        />
        <Card.Body>
          <Card.Title>Gorro Natación Tejido Punto</Card.Title>
          <Button variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SideBar;
