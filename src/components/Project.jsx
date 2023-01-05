import { Row, Col, Badge, Carousel, Button, Image } from "react-bootstrap";
export const Project = (obj, Link) => {
  //   const images = () => {
  //     if (obj.Image_1) {
  //       return (
  //         <img
  //           className="d-block w-100 sixteen-to-nine opacity-75"
  //           src={obj.Image_1}
  //           alt="Second slide"
  //         />
  //       );
  //     }
  //     if (obj.Image_2) {
  //       return (
  //   <img
  //     className="d-block w-100 sixteen-to-nine opacity-75"
  //     src={obj.Image_2}
  //     alt="Second slide"
  //   />
  //       );
  //     }
  //   };

  //   const getClass = () => {
  //     if ("React.js") {
  //       return "react";
  //     }
  //     if ("Redux") {
  //       return "redux";
  //     }
  //   };

  return (
    <Col className="mb-2">
      <div class="container_window">
        <div class="top d-flex align-items-center justify-content-between">
          <div>
            <span class="dot me-1" style={{ background: "#ED594A" }}></span>
            <span class="dot me-1" style={{ background: "#FDD800" }}></span>
            <span class="dot me-1" style={{ background: "#5AC05A" }}></span>
          </div>
          <span className="me-1">{obj.Title}</span>
        </div>

        <div class="content">
          <Carousel>
            {obj.Images.map((tim, index) => {
              return (
                <Carousel.Item key={index} interval={4000}>
                  <Image
                    className="d-block w-100 sixteen-to-nine opacity-75"
                    src={tim}
                    alt="Second slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div class="overlay" style={{ zIndex: "3" }}>
            <div>
              <span className="d-flex mb-2">
                {obj.Tech_stack.map((tech, index) => {
                  console.log(tech, typeof tech);
                  const getClass = () => {
                    if (tech === "React.js") {
                      return "react";
                    }
                    if (tech === "Redux") {
                      return "redux";
                    }
                    if (tech === "Bootstrap 5" || tech == "Bootstrap 4") {
                      return "bootstrap";
                    }
                    if (tech === "JavaScript") {
                      return "javascript";
                    }
                    if (tech === "API") {
                      return "api";
                    }
                    if (tech === "HTML") {
                      return "html";
                    }
                    if (tech === "CSS") {
                      return "css";
                    }
                  };
                  return (
                    <Badge
                      bg="opacity-75 me-1"
                      className={getClass()}
                      key={index}
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </span>
              <span className="project-description">{obj.Description}</span>
              <span>
                <a
                  class="btn w-100 rounded readmore m-1 text-light"
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Check it out!
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
