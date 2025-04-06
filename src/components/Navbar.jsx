import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="portfolioNav">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "#F5F5F5" }}>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "#F5F5F5" }}
        />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#F5F5F5" }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: "#F5F5F5" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "#F5F5F5" }}>
              Link
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              style={{ color: "#F5F5F5" }}
            >
              <NavDropdown.Item href="#action3" style={{ color: "#F5F5F5" }}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              style={{
                backgroundColor: "#222831",
                borderColor: "#F5F5F5",
                color: "#F5F5F5",
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
