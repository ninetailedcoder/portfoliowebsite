import { Col, Container,Nav, Navbar, NavItem, NavLink, Row } from "reactstrap"

const Navigation = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Navbar sticky="top" >
                        <Nav>
                            <NavItem>
                                <NavLink href='#about' >
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#skills">
                                    skills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Navigation