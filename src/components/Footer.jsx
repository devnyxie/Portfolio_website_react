import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  const tim = "</Tim>";
  return (
    <Card
      className="text-center text-light"
      id="footer"
      style={{ borderRadius: "0%" }}
    >
      <Card.Body id="footer-inside">
        <Card.Title className="mono">
          <h4 style={{ fontSize: "30px" }}>{tim}</h4>
        </Card.Title>
        <Card.Text>
          <hr />
          <p>Made with ❤️ by Tim Afanasiev.</p>
          <p className="text-muted">©2023 Tim Afanasiev</p>

          <p className="mono pt-3 pb-3">
            "The trick is to know what you're fighting for."
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Footer;
