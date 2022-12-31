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
            <div className="d-flex justify-content-center">
              <h4 className="span_one">Tim Afanasiev</h4>
              <h4 className="span_two">
                Young & motivated Junior Full Stack Web Developer
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-around position-absolute bottom-0 start-0 text-light socials p-4 socials-section">
            <FaGithubAlt size={30} className="social github me-2" />
            <FaLinkedin size={30} className="social linkedin me-2" />
            {/* <FaInstagram size={30} className="social instagram" /> */}
            <FaDiscord size={30} className="social discord me-2" />
            <FaPinterest size={30} className="social pinterest me-2" />
          </div>
        </div>
      </div>
    </>
  );
};
