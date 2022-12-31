import { Row, Col } from "react-bootstrap";

export const Background = () => {
  return (
    <div
      className="half-height"
      style={{ backgroundColor: "#17191b" }}
      id="skills"
    >
      <div className="d-flex justify-content-center align-items-center half-height text-light ">
        <div className="text-center">
          <h4 className="p-2">Things I code with:</h4>

          <Row className="d-flex justify-content-center mt-2 mb-2">
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=html" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=css" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=bootstrap" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=nodejs" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=ts" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=react" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=redux" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=mongodb" />
            </Col>
            <Col xs={1}>
              <img alt="" src="https://skillicons.dev/icons?i=git" />
            </Col>
          </Row>
          <div id="stats" align="center">
            <img
              alt=""
              className="img"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/overview.svg#gh-dark-mode-only"
            />
            <img
              alt=""
              className="img"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/languages.svg#gh-dark-mode-only"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
