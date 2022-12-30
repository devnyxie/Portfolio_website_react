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
          <p align="center">
            <a href="https://skillicons.dev">
              <img
                alt=""
                src="https://skillicons.dev/icons?i=html,css,bootstrap,nodejs,ts,react,redux,mongodb,git"
              />
            </a>
          </p>
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
          <div className="mt-3">
            <h5>Learning/Reading books about or Interested in:</h5>
            <img
              alt=""
              className="m-1"
              src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"
            />
            <img
              alt=""
              className="m-1"
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            />
            <img
              alt=""
              className="m-1"
              src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
            />
            <img
              alt=""
              className="m-1"
              src="https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
