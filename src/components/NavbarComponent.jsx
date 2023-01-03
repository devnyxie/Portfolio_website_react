import { Navbar, Container } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { FaRegNewspaper, FaLaptopCode } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoReaderSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
export const NavbarComponent = () => {
  return (
    <>
      <Navbar
        className="w-100"
        style={{ position: "fixed", zIndex: "3" }}
        id="navbar-custom"
      >
        <Container fluid className="mx-2 me-2  d-flex justify-content-between">
          <Navbar.Brand className="d-flex text-light no-p-no-m" href="#">
            <span>
              <BsCodeSlash size={28} />
            </span>
            <span className="d-flex align-items-center mx-2"> Dev Tim</span>
          </Navbar.Brand>
          <div>
            {/* <Navbar.Brand className="text-light" href="#">
              <FaRegNewspaper size={24} alt="CV" />
            </Navbar.Brand> */}
            <Navbar.Brand
              className="text-light"
              href="https://resume.io/r/0a9bLhNlc"
            >
              <IoReaderSharp size={24} />
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#about">
              <SiAboutdotme size={24} />
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#skills">
              <GiSkills size={24} />
            </Navbar.Brand>
            <Navbar.Brand className="text-light" href="#projects">
              <FaLaptopCode size={24} />
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
