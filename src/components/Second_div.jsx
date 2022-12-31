import { Row, Col } from "react-bootstrap";
import pfp from "../data/pfp.jpg";
export const Second_div = () => {
  return (
    <div className="bg-dark half-height" id="about">
      <div className="d-flex justify-content-center half-height text-light ">
        {/* <div className="bg-dark w-75">h1</div> */}
        <Row className="w-75 d-flex justify-content-center align-items-center">
          <Col xs={4} className="d-flex justify-content-center">
            <img
              src={pfp}
              className="social"
              style={{ borderRadius: "50%", maxHeight: "350px" }}
            />
          </Col>
          <Col xs={7}>
            <h3>About</h3>
            <hr />
            <p>
              Hello, my name is Tim. I'm young and I love software development.
              I speak multiple languages (English, Greek, Russian, and Polish)
              and like traveling. I'm passionate about programming, technology,
              and innovation. I learn fast and would like to join a dynamic and
              innovative team to develop my skills and deliver meaningful work.
              At the moment, I'm finishing EPICODE's Master Camp to become a
              Full-Stack Developer, but I'm already in search for a good job.
              <br />
              <br />
              My front-end skills:
              <ul>
                <li>HTML+CSS</li>
                <li>-JavaScript/TypeScript</li>
                <li>React.js/Redux</li>
              </ul>
              My back-end skills:
              <ul>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
