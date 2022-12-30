import { Navbar, Container } from "react-bootstrap";
export const NavbarComponent = () => {
  return (
    <>
      <Navbar className="w-100" style={{ position: "fixed" }}>
        <Container fluid className="mx-2 me-2  d-flex justify-content-between">
          <Navbar.Brand className="text-light" href="#home">
            Dev Tim
          </Navbar.Brand>
          <div>
            <Navbar.Brand className="text-light" href="#">
              CV
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#">
              Link
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#">
              Link
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#">
              Link
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
