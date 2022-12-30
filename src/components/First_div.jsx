import {
  FaGithubAlt,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";
export const First_div = () => {
  return (
    <>
      <div className="bg-dark full-height first-div">
        <div className="position-absolute top-50 start-50 translate-middle text-light">
          <div className="d-flex heading">
            <div
              className="d-flex justify-content-center"
              style={{ width: "1200px" }}
            >
              <h4 className="span_one">Tim Afanasiev</h4>
              <h4 className="span_two">
                Young & innovative Junior Full Stack Web Developer
              </h4>
            </div>
          </div>
        </div>
        <div className="socials-section">
          <div className="d-flex justify-content-between position-absolute bottom-0 start-0 text-light w-25 p-4 socials">
            <FaGithubAlt size={32} className="social github" />
            <FaLinkedin size={32} className="social linkedin" />
            <FaInstagram size={32} className="social instagram" />
            <FaDiscord size={32} className="social discord" />
            <FaPinterest size={32} className="social pinterest" />
          </div>
        </div>
      </div>
    </>
  );
};
