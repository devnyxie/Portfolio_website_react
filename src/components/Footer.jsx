import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  const tim = "</Tim>";
  return (
    <Card className="text-center text-light" id="footer">
      <Card.Body id="footer-inside">
        <Card.Title>
          <h4 style={{ fontSize: "30px" }}>{tim}</h4>
        </Card.Title>
        <Card.Text>
          <hr />
          <p>Made with ❤️ by Tim Afanasiev.</p>
          <p className="text-muted">©2023 Tim Afanasiev</p>
          <br />
          <p>"The trick is to know what you're fighting for."</p>
          <br />
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Footer;
