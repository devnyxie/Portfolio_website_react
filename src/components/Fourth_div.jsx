import { Row, Col, Badge, Carousel, Button } from "react-bootstrap";
import projects from "../data/database/projects.json";
import { Project } from "./Project";
export const Fourth_div = () => {
  const github = "https://github.com/talmkg/";
  return (
    <>
      <div className="bg-dark p-2 pb-4 text-light skills d-flex justify-content-center">
        <div className="container pt-2">
          <div className="d-flex justify-content-center">
            <p className="w-75 text-center " id="intro-projects">
              Below are just a few of the major projects that I have worked on
              in the past. I have worked with a wide range of applications
              ranging from mobile apps to fully responsive webapps.
            </p>
          </div>
          <Row
            className="row-cols-1 row-cols-md-1 row-cols-lg-2 d-flex justify-content-center"
            id="projects"
          >
            {projects.map((obj) => (
              <Project {...obj} />
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
