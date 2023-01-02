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
            <div className="d-flex justify-content-center text-center">
              <h4 className="span_one">Tim Afanasiev</h4>
              <h4 className="span_two">
                Young & motivated Junior Full Stack Web Developer
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-around position-absolute bottom-0 start-0 text-light socials p-4 socials-section">
            <a
              href="https://github.com/talmkg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt size={30} className="social github me-3 links" />
            </a>
            <a
              href="https://www.linkedin.com/in/talmkg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="social linkedin me-3 links" />
            </a>

            <a
              href="https://discord.gg/CpVs6bTJD2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={30} className="social discord me-3 links" />
            </a>
            <a
              href="https://pinterest.com/talmkg_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest size={30} className="social pinterest me-3 links " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
