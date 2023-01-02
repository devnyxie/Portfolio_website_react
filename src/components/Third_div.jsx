import { Row, Col, Container } from "react-bootstrap";

export const Background = () => {
  return (
    <div className="p-3" style={{ backgroundColor: "#17191b" }} id="skills">
      <div className="d-flex justify-content-center  text-light ">
        <div className="text-center">
          <div>
            <h4 className="p-1">Things I code with:</h4>
            <Container>
              <Row className=" row-cols-10 row-cols-lg-10row-cols-md-10 mt-2 mb-2 d-flex justify-content-center">
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=html" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=css" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=bootstrap" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=nodejs" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=ts" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=react" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=redux" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=mongodb" />
                </Col>
                <Col className="col mb-2">
                  <img alt="" src="https://skillicons.dev/icons?i=git" />
                </Col>
              </Row>
            </Container>
          </div>

          <div id="stats">
            <img
              alt=""
              className="img stat"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/overview.svg#gh-dark-mode-only"
            />
            <img
              alt=""
              className="img stat"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/languages.svg#gh-dark-mode-only"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
