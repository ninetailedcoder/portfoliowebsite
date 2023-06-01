import { Col, Container, Nav, Navbar, NavItem, NavLink, Row } from "reactstrap";

const Navigation = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Navbar className="navbar-custom" sticky="top">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
