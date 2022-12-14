import {
  Nav,
  Navbar,
  Container,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";

function Navibar() {
  let navigate = useNavigate();
  return (
    <div className="Navibar">
      <Navbar expand="lg" className="shopNavbar">
        <Container fluid>
          <Navbar.Brand>Toy Project Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                <FontAwesomeIcon icon={faHouse} fixedWidth />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail/0");
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} fixedWidth />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <FontAwesomeIcon icon={faApplePay} size="2x" />
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">????</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
